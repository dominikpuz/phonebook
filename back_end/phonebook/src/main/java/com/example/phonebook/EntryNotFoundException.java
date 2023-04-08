package com.example.phonebook;

public class EntryNotFoundException extends RuntimeException {
    public EntryNotFoundException(Long id) {
        super("Could not find entry " + id);
    }
}
