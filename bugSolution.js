// bugSolution.js
import * as DocumentPicker from 'expo-document-picker';

async function selectMultipleFiles() {
  try {
    const result = await DocumentPicker.getDocumentAsync({
      multiple: true,
    });

    // Filter out null and duplicate URIs
    const uniqueUris = [...new Set(result.uris.filter(uri => uri !== null))];

    console.log('Selected Files (Filtered):', uniqueUris);

  } catch (error) {
    console.log('Error:', error);
  }
}

selectMultipleFiles();