const rules = [
    [/#{6}\s([^\n]+)\n/g, '<h6>$1</h6>'],
    [/#{5}\s([^\n]+)\n/g, '<h5>$1</h5>'],
    [/#{4}\s([^\n]+)\n/g, '<h4>$1</h4>'],
    [/#{3}\s([^\n]+)\n/g, '<h3>$1</h3>'],
    [/#{2}\s([^\n]+)\n/g, '<h2>$1</h2>'],
    [/#{1}\s([^\n]+)\n/g, '<h1>$1</h1>'],
    [/([^\n]+)\n\s+=+/g, '<h1>$1</h1><hr/>'],
    [/([^\n]+)\n\s+-+/g, '<h2>$1</h2><hr/>'],
    [/\*([^\*]+)\*/g, '<b>$1</b>'],
    [/\_([^\_]+)\_/g, '<i>$1</i>'],
    [/((\n\d\..+)+)/g, '<ol>$1</ol>'],
    [/((\n\*..+)+)/g, '<ul>$1</ul>'],
    [/([^\n]+\n)/g, '<p>$1</p>']
];

export default {
    bind(el) {        
        console.log('Matching...');
        let html = el.textContent;
        rules.forEach(([rule, template]) => {
            html = html.replace(rule, template)
        })        
        
        el.innerHTML = html;
    }
}