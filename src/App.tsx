/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="page-wrapper">
      {/* 1. Announcement Bar */}
      <motion.div 
        className="announcement-bar"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p>🎉 โปรโมชันพิเศษ! สั่งซื้อครบ 500 บาท ส่งฟรีทั่วไทย 🚚</p>
      </motion.div>

      {/* 2. Header & Navigation */}
      <motion.nav 
        className="navbar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="logo">
          <i className="fas fa-leaf"></i>
          <span>MangoGarden</span>
        </div>

        {/* Checkbox Hack for Mobile Menu */}
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          <i className="fas fa-bars"></i>
        </label>

        <ul className="nav-links">
          <li><a href="#home">หน้าแรก</a></li>
          <li><a href="#features">จุดเด่น</a></li>
          <li><a href="#products">สินค้า</a></li>
          <li><a href="#about">เกี่ยวกับเรา</a></li>
          <li><a href="#contact">ติดต่อ</a></li>
        </ul>

        <div className="nav-icons">
          <a href="#"><i className="fas fa-search"></i></a>
          <a href="#" className="cart-icon">
            <i className="fas fa-shopping-basket"></i>
            <span className="cart-count">2</span>
          </a>
        </div>
      </motion.nav>

      {/* 3. Hero Section */}
      <section id="home" className="hero">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          มะม่วงเกรดพรีเมียม สดจากสวน
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          คัดสรรความหวานหอมทุกลูก ส่งตรงถึงบ้านคุณด้วยความใส่ใจ ปลูกแบบธรรมชาติ ไร้สารพิษ
        </motion.p>
        <motion.button 
          className="btn-primary"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          สั่งซื้อเลย
        </motion.button>
      </section>

      {/* 4. Features Section */}
      <motion.section 
        id="features" 
        className="features"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="feature-card" variants={itemVariants}>
          <i className="fas fa-seedling"></i>
          <h3>ปลูกธรรมชาติ</h3>
          <p>เราใช้วิธีการปลูกแบบอินทรีย์ ปลอดภัยจากสารเคมี 100%</p>
        </motion.div>
        <motion.div className="feature-card" variants={itemVariants}>
          <i className="fas fa-award"></i>
          <h3>คัดเกรดทุกลูก</h3>
          <p>มะม่วงทุกลูกผ่านการคัดสรรขนาดและคุณภาพอย่างดีที่สุด</p>
        </motion.div>
        <motion.div className="feature-card" variants={itemVariants}>
          <i className="fas fa-shipping-fast"></i>
          <h3>ส่งไว ทันใจ</h3>
          <p>ระบบขนส่งที่รวดเร็ว มั่นใจได้ว่ามะม่วงจะยังสดใหม่เมื่อถึงมือคุณ</p>
        </motion.div>
      </motion.section>

      {/* 5. Products Section */}
      <section id="products" className="products">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          รายการสินค้าแนะนำ
        </motion.h2>
        <motion.div 
          className="product-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* สินค้าปักหมุด */}
          <motion.div className="product-card pinned" variants={itemVariants}>
            <span className="badge">สินค้าขายดี</span>
            <img src="https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=400&auto=format&fit=crop" alt="มะม่วงน้ำดอกไม้" className="product-img" referrerPolicy="no-referrer" />
            <div className="product-info">
              <h4>มะม่วงน้ำดอกไม้สีทอง</h4>
              <p className="product-price">฿150 / กก.</p>
              <button className="btn-add-cart">เพิ่มลงตะกร้า</button>
            </div>
          </motion.div>

          <motion.div className="product-card" variants={itemVariants}>
            <img src="https://images.unsplash.com/photo-1591073113125-e46713c829ed?q=80&w=400&auto=format&fit=crop" alt="มะม่วงอกร่อง" className="product-img" referrerPolicy="no-referrer" />
            <div className="product-info">
              <h4>มะม่วงอกร่องพิกุลทอง</h4>
              <p className="product-price">฿120 / กก.</p>
              <button className="btn-add-cart">เพิ่มลงตะกร้า</button>
            </div>
          </motion.div>

          <motion.div className="product-card" variants={itemVariants}>
            <img src="https://images.unsplash.com/photo-1605027990121-cbae9e0642df?q=80&w=400&auto=format&fit=crop" alt="มะม่วงเขียวเสวย" className="product-img" referrerPolicy="no-referrer" />
            <div className="product-info">
              <h4>มะม่วงเขียวเสวยคัดพิเศษ</h4>
              <p className="product-price">฿90 / กก.</p>
              <button className="btn-add-cart">เพิ่มลงตะกร้า</button>
            </div>
          </motion.div>

          <motion.div className="product-card" variants={itemVariants}>
            <img src="https://images.unsplash.com/photo-1620189507195-68309c04c4d0?q=80&w=400&auto=format&fit=crop" alt="มะม่วงมหาชนก" className="product-img" referrerPolicy="no-referrer" />
            <div className="product-info">
              <h4>มะม่วงมหาชนก</h4>
              <p className="product-price">฿100 / กก.</p>
              <button className="btn-add-cart">เพิ่มลงตะกร้า</button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 6. About Section */}
      <section id="about" className="about">
        <motion.div 
          className="about-img"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src="https://images.unsplash.com/photo-1591073113125-e46713c829ed?q=80&w=800&auto=format&fit=crop" alt="เรื่องราวของสวน" referrerPolicy="no-referrer" />
        </motion.div>
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>เรื่องราวของ MangoGarden</h2>
          <p>สวนของเราเริ่มต้นจากความรักในการปลูกผลไม้ เราดูแลมะม่วงทุกต้นเหมือนคนในครอบครัว เพื่อให้ได้ผลผลิตที่มีคุณภาพและรสชาติที่ดีที่สุด</p>
          <p>เรายึดถือหลักการเกษตรยั่งยืน ไม่เพียงแต่เพื่อรสชาติที่อร่อย แต่เพื่อสุขภาพที่ดีของผู้บริโภคและสิ่งแวดล้อมด้วย</p>
          <motion.button 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            อ่านเพิ่มเติม
          </motion.button>
        </motion.div>
      </section>

      {/* 7. Footer */}
      <footer id="contact">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>MangoGarden</h4>
            <p>มะม่วงเกรดพรีเมียม สดจากสวน ส่งตรงถึงบ้านคุณ</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-line"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>ติดต่อเรา</h4>
            <p><i className="fas fa-map-marker-alt"></i> 123 หมู่ 4 ต.สวนผลไม้ จ.เชียงใหม่</p>
            <p><i className="fas fa-phone"></i> 081-234-5678</p>
            <p><i className="fas fa-envelope"></i> contact@mangogarden.com</p>
          </div>
          <div className="footer-col">
            <h4>ที่ตั้งสวนของเรา</h4>
            <div className="map-mockup">
              <i className="fas fa-map-marker-alt map-pin"></i>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 MangoGarden. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
