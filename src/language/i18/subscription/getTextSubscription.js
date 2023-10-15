import data from './data.json'

export default function getTextSubscription(keyword, language) {
    if (!language || language == null || language == "") return data['en'][keyword];
    if (!data[language][keyword]) return data['en'][keyword];
    return data[language][keyword]
} 