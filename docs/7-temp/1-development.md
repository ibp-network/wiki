---
sidebar_position: 1
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

## TODO list

If you would like to support us, please consider this list of tasks and volunteer for something:

- https://github.com/dotsama-ibp/dotsama-ibp/issues - pick any issue where you feel you can help
- github repo automation / actions
- development of tools: [issue #2](https://github.com/dotsama-ibp/dotsama-ibp/issues/2) has the current feature list for SLA monitoring