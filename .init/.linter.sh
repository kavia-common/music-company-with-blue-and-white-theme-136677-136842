#!/bin/bash
cd /home/kavia/workspace/code-generation/music-company-with-blue-and-white-theme-136677-136842/MusicCompanyWebPlatformFrontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

