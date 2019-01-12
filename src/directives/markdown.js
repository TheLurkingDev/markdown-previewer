export default {
    bind(el) {        
        let html = el.textContent;
        console.log('initial value: ', html)
        html = html.replace(/^#{1}\s([^\n]+)/, '<h1>$1</h1>');
        console.log('edited value: ', html);
        el.innerHTML = html;
    }
}