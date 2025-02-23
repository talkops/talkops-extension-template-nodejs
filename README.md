# TalkOps Extension: Boilerplate NodeJS
![Docker Pulls](https://img.shields.io/docker/pulls/ghcr.io/talkops/talkops-boilerplate-nodejs)

A TalkOps Extension made to work with [TalkOps](https://link.talkops.app/talkops).


## Installation Guide

Install [TalkOps](https://link.talkops.app/install-talkops).


## Integration Guide

Add the service and setup the environment variables if needed:

_compose.yml_
```
name: talkops

services:
...
  talkops-extension-boilerplate-nodejs:
    image: ghcr.io/talkops/talkops-boilerplate-nodejs
    restart: unless-stopped
```

## Environment Variables

#### AGENT_URLS

A comma-separated list of WebSocket server URLs for real-time communication with specified agents.
* Default value: `ws://talkops`
