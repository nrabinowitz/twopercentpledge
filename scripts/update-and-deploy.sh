#!/bin/sh

yarn update-signers && git diff

echo -n "Diff looks good to go (y/n)? "
read answer

if [ "$answer" == "${answer#[Yy]}" ] ;then
    exit 1
fi

git commit -am "Update signers" && git push
yarn deploy