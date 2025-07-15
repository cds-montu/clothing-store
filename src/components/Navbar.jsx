import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ cart }) {
  const location = useLocation();
  const cartCount = cart.length;

  const menu = [
    { to: '/', label: 'Home' },
    { to: '/new-arrivals', label: 'New Arrivals' },
    { to: '/men', label: 'Men' },
    { to: '/women', label: 'Women' },
    { to: '/top-bottom', label: 'Top & Bottom Wear' },
    { to: '/tshirts', label: 'T-Shirts' },
    { to: '/shirts', label: 'Shirts' },
    { to: '/cart', label: `🛒 Cart (${cartCount})` },
  ];

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={styles.link}>POINT BREAK</Link>
      </div>
      <div style={styles.menu}>
        {menu.map(item => (
          <Link key={item.to} to={item.to} style={styles.link} className="nav-link">
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    padding: '12px 30px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: { fontWeight: 'bold', fontSize: '22px' },
  menu: { display: 'flex', gap: '18px' },
  link: { textDecoration: 'none', color: '#333', fontWeight: '500', position: 'relative', padding: '6px 0', transition: 'color 0.3s' },
};
