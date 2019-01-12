const rules = [
    [/^#{1}\s([^\n]+)/, '<h1>$1</h1>']
];

export default {
    bind(el) {        
        let html = el.textContent;
        rules.forEach(([rule, template]) => {
            html = html.replace(rule, template)
        })
        
        
        el.innerHTML = html;
    }
}