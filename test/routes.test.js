const fs = require('fs');
const path = require('path');

let passed = 0;
let failed = 0;
function test(name, fn) { try { fn(); passed++; } catch (e) { console.error(`FAIL: ${name} - ${e.message}`); failed++; } }
function assert(condition, msg) { if (!condition) throw new Error(msg || 'Assertion failed'); }

const pages = ['Home','About','Dashboard','Profile','Settings','Login','Products','ProductDetail','Cart','NotFound'];
const pagesDir = path.join(__dirname, '..', 'src', 'pages');

for (const name of pages) {
  test(`${name} page exists`, () => assert(fs.existsSync(path.join(pagesDir, `${name}.js`))));
}

test('router.js exists', () => assert(fs.existsSync(path.join(__dirname, '..', 'src', 'router.js'))));

test('router uses Switch', () => {
  const c = fs.readFileSync(path.join(__dirname, '..', 'src', 'router.js'), 'utf8');
  assert(c.includes('Switch'));
});

test('router uses Redirect', () => {
  const c = fs.readFileSync(path.join(__dirname, '..', 'src', 'router.js'), 'utf8');
  assert(c.includes('Redirect'));
});

test('router uses component prop', () => {
  const c = fs.readFileSync(path.join(__dirname, '..', 'src', 'router.js'), 'utf8');
  assert(c.includes('component:'));
});

test('Profile uses useParams', () => {
  const c = fs.readFileSync(path.join(pagesDir, 'Profile.js'), 'utf8');
  assert(c.includes('useParams'));
});

test('Home uses useHistory', () => {
  const c = fs.readFileSync(path.join(pagesDir, 'Home.js'), 'utf8');
  assert(c.includes('useHistory'));
});

test('react-router-dom is 5.x', () => {
  const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
  assert(pkg.dependencies['react-router-dom'].startsWith('5'));
});

test('10 page files', () => {
  const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.js'));
  assert(files.length === 10, `Expected 10, got ${files.length}`);
});

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
