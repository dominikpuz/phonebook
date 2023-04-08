package com.example.phonebook;

import com.example.phonebook.models.PhonebookEntry;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PhonebookRepository extends JpaRepository<PhonebookEntry, Long> {
}
