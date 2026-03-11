import { motion } from 'motion/react';
import { Leaf, Menu, Search, ShoppingBasket, ShieldCheck, Truck, Star } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      {/* 1. Announcement Bar */}
      <div className="bg-emerald-700 text-emerald-50 text-center py-2 text-sm font-medium">
        🎉 โปรโมชันพิเศษ! สั่งซื้อครบ 500 บาท ส่งฟรีทั่วไทย 🚚
      </div>

      {/* 2. Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 text-orange-500">
              <Leaf className="h-6 w-6" />
              <span className="font-bold text-xl tracking-tight text-stone-800">
                Mango<span className="text-orange-500">Garden</span>
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-stone-600 hover:text-orange-500 font-medium transition-colors">หน้าแรก</a>
              <a href="#features" className="text-stone-600 hover:text-orange-500 font-medium transition-colors">จุดเด่น</a>
              <a href="#products" className="text-stone-600 hover:text-orange-500 font-medium transition-colors">สินค้า</a>
              <a href="#about" className="text-stone-600 hover:text-orange-500 font-medium transition-colors">เกี่ยวกับเรา</a>
            </div>

            <div className="flex items-center gap-5">
              <button className="text-stone-600 hover:text-orange-500 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="text-stone-600 hover:text-orange-500 transition-colors relative">
                <ShoppingBasket className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  2
                </span>
              </button>
              <button className="md:hidden text-stone-600 hover:text-orange-500 transition-colors">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 3. Hero Section */}
      <section id="home" className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=1920&auto=format&fit=crop" 
            alt="Mango Garden Background" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-stone-900/40"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
          >
            มะม่วงพรีเมียม สดจากสวน
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-100 mb-8 drop-shadow-md font-light"
          >
            คัดสรรความหวานหอมทุกลูก ส่งตรงถึงบ้านคุณด้วยความใส่ใจ ปลูกแบบธรรมชาติ ไร้สารพิษ
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition-all"
          >
            สั่งซื้อเลย
          </motion.button>
        </div>
      </section>

      {/* 4. Features Section */}
      <section id="features" className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">ปลูกธรรมชาติ</h3>
              <p className="text-stone-600">เราใช้วิธีการปลูกแบบอินทรีย์ ปลอดภัยจากสารเคมี 100%</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">คัดเกรดทุกลูก</h3>
              <p className="text-stone-600">มะม่วงทุกลูกผ่านการคัดสรรขนาดและคุณภาพอย่างดีที่สุด</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-3xl shadow-sm text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">ส่งไว ทันใจ</h3>
              <p className="text-stone-600">ระบบขนส่งที่รวดเร็ว มั่นใจได้ว่ามะม่วงจะยังสดใหม่เมื่อถึงมือคุณ</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Products Section */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-stone-800 mb-4"
            >
              รายการสินค้าแนะนำ
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }} whileInView={{ width: "6rem" }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="h-1 bg-orange-500 mx-auto rounded-full"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="group bg-stone-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative"
            >
              <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">ขายดี</div>
              <div className="aspect-square overflow-hidden">
                <img src="https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=600&auto=format&fit=crop" alt="มะม่วงน้ำดอกไม้" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 text-orange-400 mb-2">
                  <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                </div>
                <h4 className="text-lg font-bold text-stone-800 mb-1">มะม่วงน้ำดอกไม้สีทอง</h4>
                <p className="text-orange-600 font-semibold text-xl mb-4">฿150 <span className="text-sm text-stone-500 font-normal">/ กก.</span></p>
                <button className="w-full bg-stone-800 hover:bg-orange-500 text-white py-3 rounded-xl font-medium transition-colors">เพิ่มลงตะกร้า</button>
              </div>
            </motion.div>

            {/* Product 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="group bg-stone-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img src="https://images.unsplash.com/photo-1591073113125-e46713c829ed?q=80&w=600&auto=format&fit=crop" alt="มะม่วงอกร่อง" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 text-orange-400 mb-2">
                  <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                </div>
                <h4 className="text-lg font-bold text-stone-800 mb-1">มะม่วงอกร่องพิกุลทอง</h4>
                <p className="text-orange-600 font-semibold text-xl mb-4">฿120 <span className="text-sm text-stone-500 font-normal">/ กก.</span></p>
                <button className="w-full bg-stone-800 hover:bg-orange-500 text-white py-3 rounded-xl font-medium transition-colors">เพิ่มลงตะกร้า</button>
              </div>
            </motion.div>

            {/* Product 3 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="group bg-stone-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img src="https://images.unsplash.com/photo-1605027990121-cbae9e0642df?q=80&w=600&auto=format&fit=crop" alt="มะม่วงเขียวเสวย" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 text-orange-400 mb-2">
                  <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                </div>
                <h4 className="text-lg font-bold text-stone-800 mb-1">มะม่วงเขียวเสวยคัดพิเศษ</h4>
                <p className="text-orange-600 font-semibold text-xl mb-4">฿90 <span className="text-sm text-stone-500 font-normal">/ กก.</span></p>
                <button className="w-full bg-stone-800 hover:bg-orange-500 text-white py-3 rounded-xl font-medium transition-colors">เพิ่มลงตะกร้า</button>
              </div>
            </motion.div>

            {/* Product 4 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="group bg-stone-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img src="https://images.unsplash.com/photo-1620189507195-68309c04c4d0?q=80&w=600&auto=format&fit=crop" alt="มะม่วงมหาชนก" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 text-orange-400 mb-2">
                  <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                </div>
                <h4 className="text-lg font-bold text-stone-800 mb-1">มะม่วงมหาชนก</h4>
                <p className="text-orange-600 font-semibold text-xl mb-4">฿100 <span className="text-sm text-stone-500 font-normal">/ กก.</span></p>
                <button className="w-full bg-stone-800 hover:bg-orange-500 text-white py-3 rounded-xl font-medium transition-colors">เพิ่มลงตะกร้า</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. About Section */}
      <section id="about" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-lg"
            >
              <img src="https://images.unsplash.com/photo-1591073113125-e46713c829ed?q=80&w=800&auto=format&fit=crop" alt="เรื่องราวของสวน" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">เรื่องราวของ MangoGarden</h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                สวนของเราเริ่มต้นจากความรักในการปลูกผลไม้ เราดูแลมะม่วงทุกต้นเหมือนคนในครอบครัว เพื่อให้ได้ผลผลิตที่มีคุณภาพและรสชาติที่ดีที่สุด
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                ด้วยประสบการณ์กว่า 20 ปี เราพัฒนาระบบการปลูกที่ใส่ใจสิ่งแวดล้อม ลดการใช้สารเคมี และเน้นความยั่งยืน เพื่อส่งมอบความสุขผ่านมะม่วงทุกลูกถึงมือคุณ
              </p>
              <button className="border-2 border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white px-8 py-3 rounded-full font-semibold transition-colors">
                อ่านเพิ่มเติม
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-orange-500 mb-6">
            <Leaf className="h-6 w-6" />
            <span className="font-bold text-xl tracking-tight text-white">Mango<span className="text-orange-500">Garden</span></span>
          </div>
          <p className="mb-6">© 2026 MangoGarden. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Line Official</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
