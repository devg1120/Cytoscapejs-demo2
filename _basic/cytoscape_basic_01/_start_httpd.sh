#/c/Users/devg1/lighttpd/lighttpd.exe  -D -f _lighttpd.conf
#/c/"Program Files"/lighttpd/lighttpd.exe  -D -f _lighttpd.conf

if [ -f /c/"Program Files"/lighttpd/lighttpd.exe  ]; then
    /c/"Program Files"/lighttpd/lighttpd.exe  -D -f _lighttpd.conf

elif [ -f /c/Users/devg1/lighttpd/lighttpd.exe  ]; then
    /c/Users/devg1/lighttpd/lighttpd.exe  -D -f _lighttpd.conf
fi
