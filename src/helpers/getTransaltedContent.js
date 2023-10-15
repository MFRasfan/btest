export default function getTransaltedContent(obj, language) {
  if (!language || language == null || language == "") return obj.en;
  return obj[language]
}