---
sidebar_position: 4
---

# Development Requirements

* Configuration
    * Member and system configuration information will be stored in json on github

* Web Page / Stats
    * Simple display website with stats/information on local site as well as remote sites. 
    * Importer to allow updating local state from github configuration
    * API endpoint allowing export of information
    * Database: MySQL 

* Health Check
    * Health checker written in rust or golang that makes verifications on local and remote site availability.
    * Checks:
        * Is Online?
        * Network Latency (Avg)
        * Packet Loss (Avg)
        * Response Latency 
        * Response Time (Response Latency - Network Latency = Response Time)
        * Contains full archive? (Back testing blocks)
    * Database: MySQL

* Advisor / Curator App
    * Collates information from a variety of endpoints and APIs. 
    * Produces billing sheet that allows curators to pay members
