package com.example.phonebook.controllers;

import com.example.phonebook.EntryNotFoundException;
import com.example.phonebook.PhonebookRepository;
import com.example.phonebook.models.PhonebookEntry;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class PhonebookController {
    PhonebookRepository phonebook;

    public PhonebookController(PhonebookRepository phonebook) {
        this.phonebook = phonebook;
    }

    @GetMapping("/phonebook")
    public List<PhonebookEntry> getAllEntries() {
        return phonebook.findAll();
    }

    @PostMapping("/phonebook/add")
    public PhonebookEntry addEntry(@RequestBody final String entry) {
        JSONObject entryJson = new JSONObject(entry);
        return phonebook.save(new PhonebookEntry(entryJson.getString("name"), entryJson.getString("phoneNumber")));
    }

    @GetMapping("/phonebook/{id}")
    public PhonebookEntry getEntryById(@PathVariable Long id) {
        return phonebook.findById(id).orElseThrow(() -> new EntryNotFoundException(id));
    }

    @DeleteMapping("/phonebook/{id}")
    public void deleteEntry(@PathVariable Long id) {
        phonebook.deleteById(id);
    }

    @PutMapping("/phonebook/{id}")
    public PhonebookEntry updateEntry(@PathVariable Long id, @RequestBody final String entryBody) {
        JSONObject entryJson = new JSONObject(entryBody);
        return phonebook.findById(id).map(entry -> {
            entry.setName(entryJson.getString("name"));
            entry.setPhoneNumber(entryJson.getString("phoneNumber"));
            return phonebook.save(entry);
        }).orElseGet(() -> {
            PhonebookEntry newEntry = new PhonebookEntry(entryJson.getString("name"), entryJson.getString("phoneNumber"));
            newEntry.setId(id);
            return phonebook.save(newEntry);
        });
    }

}
