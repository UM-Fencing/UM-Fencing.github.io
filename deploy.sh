#!/bin/sh
rm -rf public/
hugo
rsync -rv public/* login.itd.umich.edu:/afs/umich.edu/group/soas/fencing/Public/html/
