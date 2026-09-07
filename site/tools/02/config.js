// ============================================
// CONFIG - PAKET 02 - SVG ICONS
// ============================================

const ICONS = {
    logo: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    home: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
    about: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
    contact: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
    menu: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',
    close: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
    
    developer: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    designer: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>',
    data: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',
    content: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
    security: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
    math: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>',
    
    regex: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
    jwt: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"></circle><path d="M21 2l-9.6 9.6"></path><circle cx="15.5" cy="7.5" r="5.5"></circle></svg>',
    diff: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>',
    sql: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',
    css: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
    js: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3h-3"></path></svg>',
    html: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    convert: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 1l4 4-4 4"></path><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><path d="M7 23l-4-4 4-4"></path><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>',
    api: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17l6-6-6-6"></path><path d="M12 19h8"></path></svg>',
    cron: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
    image: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>',
    
    shadow: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect></svg>',
    radius: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4" ry="4"></rect></svg>',
    grid: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
    flexbox: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line></svg>',
    animation: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
    gradient: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"></path><path d="M2 12h20"></path><circle cx="12" cy="12" r="10"></circle></svg>',
    svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
    ratio: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line></svg>',
    crop: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2v14a2 2 0 0 0 2 2h14"></path><path d="M18 22V8a2 2 0 0 0-2-2H2"></path></svg>',
    resize: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>',
    
    key: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>',
    lock: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
    hash: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>',
    shield: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
    signature: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>',
    
    number: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>',
    fibonacci: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>',
    matrix: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line></svg>',
    equation: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>',
    
    file: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>',
    search: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
    chart: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>',
    table: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line></svg>'
};

// ===== CONFIG =====
const CONFIG = (function() {
    const basePath = '/site/tools/02/';
    
    const hostname = window.location.hostname;
    const parts = hostname.split('.');
    
    let subdomain = '';
    let domain = '';
    let tld = '';
    
    if (parts.length >= 3) {
        subdomain = parts[0];
        domain = parts[1];
        tld = parts.slice(2).join('.');
    } else if (parts.length === 2) {
        domain = parts[0];
        tld = parts[1];
    } else {
        domain = parts[0];
    }
    
    const isLocal = hostname === 'localhost' || hostname === '127.0.0.1' || 
                    hostname.startsWith('192.168.') || hostname.startsWith('10.');
    
    function generateSiteName() {
        if (isLocal) return 'DevTools';
        if (subdomain && subdomain !== 'www') {
            return subdomain.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        }
        if (domain) {
            return domain.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        }
        return 'DevTools';
    }
    
    function generateTagline() {
        const taglines = [
            'Advanced Developer Tools',
            'Professional Web Tools Suite',
            'Powerful Online Utilities',
            'Free Development Tools',
            'Online Toolkit for Developers'
        ];
        const hash = hostname.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
        return taglines[hash % taglines.length];
    }
    
    function generateDescription(siteName) {
        return `${siteName} - advanced developer tools. Regex, JSON, crypto, design, data analysis, and more. All in your browser.`;
    }
    
    function generateColors() {
        const palettes = [
            { primary: '#6366f1', primaryDark: '#4f46e5', secondary: '#8b5cf6' },
            { primary: '#0ea5e9', primaryDark: '#0284c7', secondary: '#38bdf8' },
            { primary: '#10b981', primaryDark: '#059669', secondary: '#34d399' },
            { primary: '#f59e0b', primaryDark: '#d97706', secondary: '#fbbf24' },
            { primary: '#f97316', primaryDark: '#ea580c', secondary: '#fb923c' },
            { primary: '#ec4899', primaryDark: '#db2777', secondary: '#f472b6' },
            { primary: '#14b8a6', primaryDark: '#0d9488', secondary: '#2dd4bf' },
            { primary: '#8b5cf6', primaryDark: '#7c3aed', secondary: '#a78bfa' }
        ];
        const hash = hostname.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
        return palettes[hash % palettes.length];
    }
    
    const siteName = generateSiteName();
    const colors = generateColors();
    
    return {
        siteName: siteName,
        tagline: generateTagline(),
        description: generateDescription(siteName),
        logoIcon: ICONS.logo,
        colors: colors,
        basePath: basePath,
        isLocal: isLocal,
        hostname: hostname,
        icons: ICONS,
        
        adsense: {
            enabled: false,
            clientId: '',
            slots: { header: '', content: '', footer: '' }
        },
        
        categories: [
            { id: 'developer', name: 'Developer', icon: ICONS.developer, file: 'category-developer.html' },
            { id: 'designer', name: 'Designer', icon: ICONS.designer, file: 'category-designer.html' },
            { id: 'data', name: 'Data', icon: ICONS.data, file: 'category-data.html' },
            { id: 'content', name: 'Content', icon: ICONS.content, file: 'category-content.html' },
            { id: 'security', name: 'Security', icon: ICONS.security, file: 'category-security.html' },
            { id: 'math', name: 'Math', icon: ICONS.math, file: 'category-math.html' }
        ],
        
        tools: [
            // Developer
            { id: 'regex-playground', name: 'Regex Playground', icon: ICONS.regex, file: 'developer/regex-playground.html', description: 'Test regex with highlighting', category: 'developer' },
            { id: 'jwt-decoder', name: 'JWT Decoder', icon: ICONS.jwt, file: 'developer/jwt-decoder.html', description: 'Decode JSON Web Tokens', category: 'developer' },
            { id: 'code-diff', name: 'Code Diff', icon: ICONS.diff, file: 'developer/code-diff.html', description: 'Compare two code blocks', category: 'developer' },
            { id: 'sql-formatter', name: 'SQL Formatter', icon: ICONS.sql, file: 'developer/sql-formatter.html', description: 'Format SQL queries', category: 'developer' },
            { id: 'css-specificity', name: 'CSS Specificity', icon: ICONS.css, file: 'developer/css-specificity.html', description: 'Calculate CSS specificity', category: 'developer' },
            { id: 'js-minifier', name: 'JS Minifier', icon: ICONS.js, file: 'developer/js-minifier.html', description: 'Minify JavaScript', category: 'developer' },
            { id: 'html-prettifier', name: 'HTML Prettifier', icon: ICONS.html, file: 'developer/html-prettifier.html', description: 'Format HTML', category: 'developer' },
            { id: 'xml-json', name: 'XML to JSON', icon: ICONS.convert, file: 'developer/xml-json.html', description: 'Convert XML & JSON', category: 'developer' },
            { id: 'graphql-parser', name: 'GraphQL Parser', icon: ICONS.api, file: 'developer/graphql-parser.html', description: 'Parse GraphQL', category: 'developer' },
            { id: 'ts-js', name: 'TypeScript to JS', icon: ICONS.convert, file: 'developer/ts-js.html', description: 'Convert TypeScript', category: 'developer' },
            { id: 'regex-generator', name: 'Regex Generator', icon: ICONS.regex, file: 'developer/regex-generator.html', description: 'Generate regex', category: 'developer' },
            { id: 'api-builder', name: 'API Builder', icon: ICONS.api, file: 'developer/api-builder.html', description: 'Mock API responses', category: 'developer' },
            { id: 'cron-builder', name: 'Cron Builder', icon: ICONS.cron, file: 'developer/cron-builder.html', description: 'Visual cron builder', category: 'developer' },
            { id: 'base64-image', name: 'Base64 Image', icon: ICONS.image, file: 'developer/base64-image.html', description: 'Image to Base64', category: 'developer' },
            { id: 'json-schema', name: 'JSON Schema', icon: ICONS.file, file: 'developer/json-schema-validator.html', description: 'Validate JSON schema', category: 'developer' },
            
            // Designer
            { id: 'box-shadow', name: 'Box Shadow', icon: ICONS.shadow, file: 'designer/box-shadow.html', description: 'Visual shadow builder', category: 'designer' },
            { id: 'border-radius', name: 'Border Radius', icon: ICONS.radius, file: 'designer/border-radius.html', description: 'Visual radius builder', category: 'designer' },
            { id: 'grid-generator', name: 'Grid Generator', icon: ICONS.grid, file: 'designer/grid-generator.html', description: 'CSS Grid builder', category: 'designer' },
            { id: 'flexbox', name: 'Flexbox Playground', icon: ICONS.flexbox, file: 'designer/flexbox-playground.html', description: 'Visual flexbox', category: 'designer' },
            { id: 'animation', name: 'Animation Generator', icon: ICONS.animation, file: 'designer/animation-generator.html', description: 'CSS animation', category: 'designer' },
            { id: 'gradient', name: 'Gradient Generator', icon: ICONS.gradient, file: 'designer/gradient-generator.html', description: 'CSS gradient', category: 'designer' },
            { id: 'svg-path', name: 'SVG Path', icon: ICONS.svg, file: 'designer/svg-path.html', description: 'Generate SVG path', category: 'designer' },
            { id: 'aspect-ratio', name: 'Aspect Ratio', icon: ICONS.ratio, file: 'designer/aspect-ratio.html', description: 'Screen ratio', category: 'designer' },
            { id: 'image-cropper', name: 'Image Cropper', icon: ICONS.crop, file: 'designer/image-cropper.html', description: 'Crop images', category: 'designer' },
            { id: 'image-resizer', name: 'Image Resizer', icon: ICONS.resize, file: 'designer/image-resizer.html', description: 'Resize images', category: 'designer' },
            
            // Data
            { id: 'csv-analyzer', name: 'CSV Analyzer', icon: ICONS.chart, file: 'data/csv-analyzer.html', description: 'Analyze CSV data', category: 'data' },
            { id: 'json-formatter', name: 'JSON Formatter', icon: ICONS.file, file: 'data/json-formatter.html', description: 'Format JSON data', category: 'data' },
            { id: 'json-csv', name: 'JSON to CSV', icon: ICONS.convert, file: 'data/json-csv.html', description: 'Convert JSON to CSV', category: 'data' },
            { id: 'csv-json', name: 'CSV to JSON', icon: ICONS.convert, file: 'data/csv-json.html', description: 'Convert CSV to JSON', category: 'data' },
            { id: 'table-generator', name: 'Table Generator', icon: ICONS.table, file: 'data/table-generator.html', description: 'Generate HTML tables', category: 'data' },
            { id: 'data-sampler', name: 'Data Sampler', icon: ICONS.data, file: 'data/data-sampler.html', description: 'Sample from dataset', category: 'data' },
            { id: 'data-anonymizer', name: 'Data Anonymizer', icon: ICONS.lock, file: 'data/data-anonymizer.html', description: 'Mask sensitive data', category: 'data' },
            { id: 'excel-formula', name: 'Excel Formula', icon: ICONS.table, file: 'data/excel-formula.html', description: 'Generate Excel formulas', category: 'data' },
            
            // Content
            { id: 'seo-meta', name: 'SEO Meta', icon: ICONS.search, file: 'content/seo-meta.html', description: 'Generate meta tags', category: 'content' },
            { id: 'keyword-clustering', name: 'Keyword Clustering', icon: ICONS.chart, file: 'content/keyword-clustering.html', description: 'Group keywords', category: 'content' },
            { id: 'content-gap', name: 'Content Gap', icon: ICONS.diff, file: 'content/content-gap.html', description: 'Find content gaps', category: 'content' },
            { id: 'readability', name: 'Readability', icon: ICONS.file, file: 'content/readability-analyzer.html', description: 'Readability score', category: 'content' },
            { id: 'summarizer', name: 'Text Summarizer', icon: ICONS.content, file: 'content/text-summarizer.html', description: 'Summarize text', category: 'content' },
            { id: 'sentiment', name: 'Sentiment Analyzer', icon: ICONS.chart, file: 'content/sentiment-analyzer.html', description: 'Analyze sentiment', category: 'content' },
            { id: 'plagiarism', name: 'Plagiarism Checker', icon: ICONS.search, file: 'content/plagiarism-checker.html', description: 'Similarity check', category: 'content' },
            
            // Security
            { id: 'rsa-generator', name: 'RSA Generator', icon: ICONS.key, file: 'security/rsa-generator.html', description: 'Generate RSA keys', category: 'security' },
            { id: 'aes-encryptor', name: 'AES Encryptor', icon: ICONS.lock, file: 'security/aes-encryptor.html', description: 'AES encrypt/decrypt', category: 'security' },
            { id: 'hash-suite', name: 'Hash Suite', icon: ICONS.hash, file: 'security/hash-suite.html', description: 'SHA-256, SHA-512', category: 'security' },
            { id: 'password-analyzer', name: 'Password Analyzer', icon: ICONS.shield, file: 'security/password-analyzer.html', description: 'Password strength', category: 'security' },
            { id: 'signature', name: 'Digital Signature', icon: ICONS.signature, file: 'security/signature-generator.html', description: 'Sign & verify', category: 'security' },
            
            // Math
            { id: 'prime-generator', name: 'Prime Generator', icon: ICONS.number, file: 'math/prime-generator.html', description: 'Generate primes', category: 'math' },
            { id: 'fibonacci', name: 'Fibonacci', icon: ICONS.fibonacci, file: 'math/fibonacci.html', description: 'Fibonacci sequence', category: 'math' },
            { id: 'big-number', name: 'Big Number', icon: ICONS.number, file: 'math/big-number.html', description: 'Large numbers', category: 'math' },
            { id: 'matrix', name: 'Matrix Calculator', icon: ICONS.matrix, file: 'math/matrix-calculator.html', description: 'Matrix operations', category: 'math' },
            { id: 'equation', name: 'Equation Solver', icon: ICONS.equation, file: 'math/equation-solver.html', description: 'Solve equations', category: 'math' }
        ],
        
        navigation: [
            { name: 'Home', file: 'index.html', icon: ICONS.home },
            { name: 'About', file: 'about.html', icon: ICONS.about },
            { name: 'Contact', file: 'contact.html', icon: ICONS.contact }
        ],
        
        footerLinks: [
            { name: 'About', file: 'about.html' },
            { name: 'Contact', file: 'contact.html' },
            { name: 'Privacy Policy', file: 'privacy-policy.html' }
        ]
    };
})();

// ============================================
// HELPER FUNCTIONS
// ============================================

function applyColors() {
    const root = document.documentElement;
    if (CONFIG.colors) {
        if (CONFIG.colors.primary) root.style.setProperty('--primary', CONFIG.colors.primary);
        if (CONFIG.colors.primaryDark) root.style.setProperty('--primary-dark', CONFIG.colors.primaryDark);
        if (CONFIG.colors.secondary) root.style.setProperty('--secondary', CONFIG.colors.secondary);
    }
}

function renderHeader() {
    const navLinks = CONFIG.navigation.map(link => 
        `<a href="${CONFIG.basePath}${link.file}">
            <span class="nav-icon">${link.icon}</span>
            <span>${link.name}</span>
        </a>`
    ).join('');
    
    return `
        <header class="topbar">
            <a href="${CONFIG.basePath}index.html" class="logo">
                <div class="logo-icon">${CONFIG.logoIcon}</div>
                <span>${CONFIG.siteName}</span>
            </a>
            <nav>${navLinks}</nav>
            <button class="sidebar-toggle" onclick="toggleSidebar()" aria-label="Toggle navigation">
                ${ICONS.menu}
            </button>
        </header>
    `;
}

function renderSidebar() {
    const categoryHTML = CONFIG.categories.map(cat => {
        const toolsHTML = CONFIG.tools.filter(t => t.category === cat.id).map(tool => 
            `<a href="${CONFIG.basePath}${tool.file}" class="sidebar-link" onclick="closeSidebarOnMobile()">
                <span class="sidebar-icon">${tool.icon}</span>
                <span>${tool.name}</span>
            </a>`
        ).join('');
        
        return `
            <div class="sidebar-section">
                <h3 class="sidebar-title">
                    <a href="${CONFIG.basePath}${cat.file}" style="display:flex;align-items:center;gap:6px;color:inherit;text-decoration:none;">
                        <span>${cat.icon}</span>
                        <span>${cat.name}</span>
                    </a>
                </h3>
                ${toolsHTML}
            </div>
        `;
    }).join('');
    
    return `
        <aside class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <div class="sidebar-logo">${CONFIG.logoIcon}</div>
                <div class="sidebar-title">${CONFIG.siteName}</div>
                <div class="sidebar-subtitle">${CONFIG.tools.length} Tools</div>
            </div>
            ${categoryHTML}
        </aside>
    `;
}

function renderOverlay() {
    return `<div class="sidebar-overlay" id="sidebarOverlay" onclick="toggleSidebar()"></div>`;
}

function renderFooter() {
    const footerLinks = CONFIG.footerLinks.map(link => 
        `<li><a href="${CONFIG.basePath}${link.file}">${link.name}</a></li>`
    ).join('');
    
    const year = new Date().getFullYear();
    
    return `
        <footer>
            <div class="footer-container">
                <div class="footer-section">
                    <h4>${CONFIG.siteName}</h4>
                    <p>${CONFIG.tagline}</p>
                </div>
                <div class="footer-section">
                    <h4>Links</h4>
                    <ul>${footerLinks}</ul>
                </div>
                <div class="footer-section">
                    <h4>Categories</h4>
                    <ul>
                        ${CONFIG.categories.map(c => `<li><a href="${CONFIG.basePath}${c.file}">${c.name} (${CONFIG.tools.filter(t => t.category === c.id).length})</a></li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${year} ${CONFIG.siteName}. All rights reserved.</p>
            </div>
        </footer>
    `;
}

function renderBreadcrumb(pageName) {
    return `
        <div class="breadcrumb">
            <a href="${CONFIG.basePath}index.html">Home</a>
            <span>/</span>
            <span>${pageName}</span>
        </div>
    `;
}

function renderToolCards(categoryId = null) {
    let tools = CONFIG.tools;
    if (categoryId) {
        tools = tools.filter(t => t.category === categoryId);
    }
    
    return tools.map(tool => `
        <a href="${CONFIG.basePath}${tool.file}" class="tool-card">
            <div class="tool-icon">${tool.icon}</div>
            <div class="tool-info">
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
            </div>
        </a>
    `).join('');
}

function renderCategoryCards() {
    return CONFIG.categories.map(cat => {
        const count = CONFIG.tools.filter(t => t.category === cat.id).length;
        return `
            <a href="${CONFIG.basePath}${cat.file}" class="category-card">
                <div class="category-icon">${cat.icon}</div>
                <h3>${cat.name}</h3>
                <p>${count} tools</p>
            </a>
        `;
    }).join('');
}

function renderRelatedTools(currentId) {
    const currentTool = CONFIG.tools.find(t => t.id === currentId);
    if (!currentTool) return '';
    
    const related = CONFIG.tools.filter(t => t.category === currentTool.category && t.id !== currentId).slice(0, 4);
    
    return related.map(tool => `
        <a href="${CONFIG.basePath}${tool.file}" class="related-tool">
            <span>${tool.icon}</span>
            <span>${tool.name}</span>
        </a>
    `).join('');
}

function renderAdsense(slotName) {
    if (!CONFIG.adsense.enabled || !CONFIG.adsense.clientId) return '';
    const slot = CONFIG.adsense.slots[slotName];
    if (!slot) return '';
    
    return `
        <div class="ad-container">
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="${CONFIG.adsense.clientId}"
                 data-ad-slot="${slot}"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>
    `;
}

function setPageTitle(pageName) {
    document.title = `${pageName} | ${CONFIG.siteName}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && pageName !== 'Dashboard') {
        metaDesc.content = `${pageName} - advanced tool. ${CONFIG.description}`;
    }
}

// ===== SIDEBAR TOGGLE =====
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (sidebar) sidebar.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
}

function closeSidebarOnMobile() {
    if (window.innerWidth <= 768) {
        toggleSidebar();
    }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
    applyColors();
    
    const headerEl = document.getElementById('site-header');
    if (headerEl) headerEl.innerHTML = renderHeader();
    
    const sidebarEl = document.getElementById('site-sidebar');
    if (sidebarEl) sidebarEl.innerHTML = renderSidebar();
    
    const layoutEl = document.querySelector('.layout');
    if (layoutEl && !document.getElementById('sidebarOverlay')) {
        const overlayDiv = document.createElement('div');
        overlayDiv.innerHTML = renderOverlay();
        layoutEl.appendChild(overlayDiv.firstChild);
    }
    
    const footerEl = document.getElementById('site-footer');
    if (footerEl) footerEl.innerHTML = renderFooter();
    
    const breadcrumbEl = document.getElementById('breadcrumb');
    const pageName = document.body.getAttribute('data-page-name');
    if (breadcrumbEl && pageName) breadcrumbEl.innerHTML = renderBreadcrumb(pageName);
    
    const toolsGrid = document.getElementById('tools-grid');
    const category = document.body.getAttribute('data-category');
    if (toolsGrid) toolsGrid.innerHTML = renderToolCards(category);
    
    const categoryGrid = document.getElementById('category-grid');
    if (categoryGrid) categoryGrid.innerHTML = renderCategoryCards();
    
    const relatedEl = document.getElementById('related-tools');
    const currentId = document.body.getAttribute('data-tool-id');
    if (relatedEl && currentId) relatedEl.innerHTML = renderRelatedTools(currentId);
    
    if (pageName) setPageTitle(pageName);
    
    const adHeader = document.getElementById('ad-header');
    if (adHeader) adHeader.innerHTML = renderAdsense('header');
    
    const adContent = document.getElementById('ad-content');
    if (adContent) adContent.innerHTML = renderAdsense('content');
    
    const adFooter = document.getElementById('ad-footer');
    if (adFooter) adFooter.innerHTML = renderAdsense('footer');
    
    window.toggleSidebar = toggleSidebar;
    window.closeSidebarOnMobile = closeSidebarOnMobile;
});