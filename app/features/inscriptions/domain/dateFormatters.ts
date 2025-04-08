export function formatEventDate(dateString: string, timeString?: string) {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

    let formatted = date.toLocaleDateString('es-ES', options);

    if (timeString) {
        formatted += `, ${timeString}`;
    }
    
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}