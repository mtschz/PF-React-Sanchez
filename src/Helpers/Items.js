import monitorImg from './assets/monitor.jpg'
import coolerImg from './assets/cooler.jpg'
import fanImg from './assets/fan.jpg'
import mouseImg from './assets/mouse.jpg'
import keyboardImg from './assets/keyboard.jpg'
import impresoraImg from './assets/impresora.jpg'
import procesadorImg from './assets/procesador.jpg'

export const items = [
    {
        title: 'KEYFANCLUB Muffin Fan 110v 120v 220v 3 inch Fan with AC Plug Electronic Cooling Fan 80mm x 25mm',
        precio: 14,
        id: 1,
        descripcion: 'Se puede utilizar para una variedad de aplicaciones, incluida refrigeración electrónica, ventilación y más. Con su tamaño compacto de 80 mm x 25 mm, este ventilador es perfecto para espacios pequeños donde el flujo de aire es esencial. El ventilador funciona con alimentación de CA y está disponible en múltiples opciones de voltaje, incluidos 110 V, 115 V, 120 V, 220 V y 240 V, lo que lo hace adecuado para su uso en una amplia gama de países y regiones.',
        img: fanImg,
        category: 'Componentes de PC',
        stock: 12
    },
    {
        title: 'Lsgoodcare 120W Semiconductor Refrigeration Cooler Module Kit, Water Cooling System for DIY Car Electronic Refrigerators with 2M Tube & Hose Clamp(Not for Water Supply Refrigeration)',
        precio: 23,
        id: 2,
        descripcion: 'Gran kit Peltier Cooler para entusiastas de la electrónica en aplicaciones de refrigeración de semiconductores, adecuado para disipadores térmicos de computadoras y refrigeración en espacios pequeños. También se utiliza para enfriar camas para mascotas, enfriar placas, bancos de pruebas, cajas de cartón, despensas, bodegas, etc.',
        img: coolerImg,
        category: 'Componentes de PC',
        stock: 15
    },
    {
        title: 'Intel® Core™ i5-11400F Desktop Processor 6 Cores up to 4.4 GHz LGA1200 (Intel® 500 Series & Select 400 Series Chipset) 65W',
        precio: 134,
        id: 3,
        descripcion: 'Compatible con placas base Intel serie 500 y determinadas placas base basadas en chipset Intel serie 400',
        img: procesadorImg,
        category: 'Componentes de PC',
        stock: 7
    },{
        title: 'Anker Bluetooth Keyboard, for Phones, Tablets, Computers, and Laptops',
        precio: 17,
        id: 4,
        descripcion: 'Lo que obtienes: teclado inalámbrico recargable Anker, cable micro USB, guía de bienvenida y garantía de 18 meses.',
        img: keyboardImg,
        category: 'Periféricos',
        stock: 23
    },
    {
        title: 'INPHIC Wireless Mouse 700mAh Large Ergonomic Rechargeable 2.4G Optical PC Laptop Cordless Mice with USB Nano Receiver, for Windows Computer Office, Black',
        precio: 12,
        id: 5,
        descripcion: 'Ratón inalámbrico recargable: la batería recargable integrada de 700 mAh de alta calidad significa que puedes recargarla cuando quieras. Cuando deje el mouse por más de 5 minutos, entrará automáticamente en modo de suspensión, lo que ahorra electricidad del mouse y hará clic en cualquier botón para reactivarlo nuevamente.',
        img: mouseImg,
        category: 'Periféricos',
        stock: 17
    },
    {
        title: 'Brother HLL2305W Compact Mono Laser Single Function Printer with Wireless and Mobile Device Printing',
        precio: 119,
        id: 6,
        descripcion: 'IMPRESIÓN MÓVIL SIMPLE PARA ESTILOS DE VIDA VIRTUALES. Disfrute de una impresión inalámbrica, sencilla y confiable desde dispositivos móviles para que pueda imprimir desde prácticamente cualquier lugar.(1) Esta impresora inalámbrica y económica es perfecta para personas y familias que están en movimiento.',
        img: impresoraImg,
        category: 'Impresoras',
        stock: 8
    },
    {
        title: 'Amazon Basics 24 Inch Monitor Powered with AOC Technology, FHD 1080P, 75hz, VESA Compatible, Built-in Speakers, Black',
        precio: 142,
        id: 7,
        descripcion: 'Monitor Full HD con resolución 1920x1080 y tecnología marca AOC; ideal para seminarios web, reuniones, trabajo digital, entretenimiento y más.',
        img: monitorImg,
        category: 'Monitores',
        stock: 14
    
    },
]

export function getItemById (id){
    return items.find((item) => item.id == id)
}

export function getItemsByCategory(category) {
    return items.filter((item) => item.category === category);
  }
  