export default function generateUrl(url, language) {
    if (!language || language == null || language == "") return url;
    return `/${language}${url}`
}