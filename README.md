# Expo DocumentPicker Android Multiple File Selection Bug

This repository demonstrates a bug in the Expo DocumentPicker API on Android when selecting multiple files.  The returned URIs array may contain duplicates or null values, leading to unpredictable behavior in applications.

## Bug Description

When using DocumentPicker.getDocumentAsync to select multiple files on an Android device, the returned `uri` array can contain duplicate entries or null values. This inconsistency makes reliable processing of selected files difficult and error-prone.

## Reproduction

1. Clone this repository.
2. Run the `bug.js` example on an Android device.
3. Select multiple files using the DocumentPicker.
4. Observe the output - you'll likely see duplicates or null values in the `uri` array.

## Solution

The `bugSolution.js` file shows a possible workaround to filter out the duplicates and null values.  However, a proper fix requires addressing the underlying issue within the Expo DocumentPicker API itself.