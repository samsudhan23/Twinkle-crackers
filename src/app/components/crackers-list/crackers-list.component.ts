import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-crackers-list',
  templateUrl: './crackers-list.component.html',
  styleUrls: ['./crackers-list.component.scss']
})
export class CrackersListComponent implements OnInit {
  whatsappNumber: string = '919865927380'; //6379562195
  Email: string = 'twinklecrackers.svks0@gmail.com';

  crackersData = [
    {
      title: 'Sound Crackers',
      products: [
        { name: '2 3/4" Bird', price: 14, Pieces: '5 pcs', count: 0, per: '1Pkt', img: '../../../assets/Crackers/Bird.jpg' },
        { name: '3 1/2" Lakshmi', price: 20, Pieces: '5 pcs', count: 0, per: '1Pkt' },
        { name: '4" Lakshmi', price: 40, Pieces: '5 pcs', count: 0, per: '1Pkt' },
        { name: '4" Lakshmi Dix', price: 50, Pieces: '5 pcs', count: 0, per: '1Pkt' },
        { name: '5" Deluxe Crackers', price: 60, Pieces: '5 pcs', count: 0, per: '1Pkt' },
        { name: '6" Deluxe Crackers', price: 70, Pieces: '5 pcs', count: 0, per: '1Pkt' },
        { name: '2 Sound Crackers', price: 60, Pieces: '5 pcs', count: 0, per: '1Pkt' },
        { name: '3 Sound Crackers', price: 70, Pieces: '5 pcs', count: 0, per: '1Pkt' },
      ]
    },
    {
      title: 'Multi Crackers',
      products: [
        { name: '28 Chorsa', price: 24, Pieces: '1 Pkt', count: 0, per: '1Pkt', img: '../../../assets/Crackers/LysmKKdA.jpg' },
        { name: '28 Gaint Crackers', price: 30, Pieces: '1 Pkt', count: 0, per: '1Pkt' },
        { name: '56 Gaint Crackers', price: 60, Pieces: '1 Pkt', count: 0, per: '1Pkt' },
        { name: '24 Deluxe (2 3/4 Inch)', price: 80, Pieces: '1 Pkt', count: 0, per: '1Pkt' },
        { name: '50 Deluxe (2 3/4 Inch)', price: 160, Pieces: '1 Pkt', count: 0, per: '1Pkt' },
        { name: '100 Deluxe (2 3/4 Inch)', price: 320, Pieces: '1 Pkt', count: 0, per: '1Pkt' },
      ]
    },
    {
      title: 'Bijili Crackers',
      products: [
        { name: 'Old is gold', price: 270, Pieces: '25 Pcs', count: 0, per: '1Box', img: '../../../assets/Crackers/bijili.jpeg' },
        { name: 'Red Bijili', price: 38, Pieces: '100 Pcs', count: 0, per: '1Box' },
        { name: 'Gold Red Bijili', price: 40, Pieces: '100 Pcs', count: 0, per: '1Box' },
        { name: 'Gold Stripped Bijili', price: 50, Pieces: '100 Pcs', count: 0, per: '1Box' },
      ]
    },
    {
      title: 'SHELLS',
      products: [
        { name: '100 L', price: 70, Pieces: '1 Pce', count: 0, per: '1Box', img: '../../../assets/Crackers/shells.jpg' },
        { name: '200 L', price: 140, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: '1K', price: 600, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: '2k', price: 1200, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: '5k', price: 2400, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: '10k', price: 4800, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: 'Magic Sound(Crackling)', price: 300, Pieces: '1 Pce', count: 0, per: '1Box' },
      ]
    },
    {
      title: 'BOMBS',
      products: [
        { name: 'Bullet Bomb', price: 40, Pieces: '10 Pcs', count: 0, per: '1Box', img: '../../../assets/Crackers/bombs.jpg' },
        { name: 'Hydro Bomb', price: 80, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'King of King(3 ply)', price: 160, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'Classic Bomb(5 ply)', price: 320, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'Super Bomb(7 ply)', price: 340, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'Paper Bomb(1/4 kg)', price: 100, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: 'Paper Bomb(1/2 kg)', price: 200, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: 'Paper Bomb(1 kg)', price: 350, Pieces: '1 Pce', count: 0, per: '1Box' },
      ]
    },
    {
      title: 'Rockets',
      products: [
        { name: 'Baby Rocket', price: 60, Pieces: '10 Pcs', count: 0, per: '1Box', img: '../../../assets/Crackers/rockets.jpg' },
        { name: 'Rocket Bomb', price: 120, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'Lunik parachute Rocket', price: 600, Pieces: '5 Pcs', count: 0, per: '1Box' },
        { name: '2 sound Rocket', price: 200, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: '3 sound Rocket', price: 220, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'Ben 10 Rocket', price: 460, Pieces: '10 Pce', count: 0, per: '1Box' },
      ]
    },
    {
      title: 'Flower pots',
      products: [
        { name: 'Flower pots small', price: 130, Pieces: '10 Pcs', count: 0, per: '1Box', img: '../../../assets/Crackers/flower.jpg' },
        { name: 'Flower pots big', price: 180, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'Flower pots special', price: 230, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'Flower pots Asoka', price: 280, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'Flower pots giant', price: 300, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'colour koti', price: 320, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'Flower pots Dix', price: 320, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'Tri Colour', price: 380, Pieces: '10 Pcs', count: 0, per: '1Box' },
      ]
    },
    {
      title: 'Ground Chakkars',
      products: [
        { name: 'Chakkar Big', price: 75, Pieces: '10 Pcs', count: 0, per: '1Box', img: '../../../assets/Crackers/ground.png' },
        { name: 'Chakkar special', price: 150, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'Chakkar deluxe', price: 300, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'Spinner special (plastic)', price: 200, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'Disco wheel', price: 120, Pieces: '5 Pcs', count: 0, per: '1Box' },
        { name: '4X4 wheel (speed)', price: 270, Pieces: '5 Pcs', count: 0, per: '1Box' },
        { name: 'Kranthi Chakkar', price: 300, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'Wire Chakkar', price: 300, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'Mr.wheel', price: 340, Pieces: '5 Pcs', count: 0, per: '1Box' },
      ]
    },
    {
      title: 'Multi candles',
      products: [
        { name: '10 Magic Pencil', price: 70, Pieces: '10 Pcs', count: 0, per: '1Box', img: '../../../assets/Crackers/candles.jpg' },
        { name: '12 Shower Pencil', price: 80, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'Ultra Pencil', price: 140, Pieces: '3 Pcs', count: 0, per: '1Box' },
        { name: 'Popcorn', price: 240, Pieces: '3 Pcs', count: 0, per: '1Box' },
        { name: 'Sivakasi special', price: 300, Pieces: '2 Pcs', count: 0, per: '1Box' },
      ]
    },
    {
      title: 'Kids special',
      products: [
        { name: 'Shin chan', price: 160, Pieces: '5 Pcs', count: 0, per: '1Box', img: '../../../assets/Crackers/kids.webp' },
        { name: 'Black Money', price: 300, Pieces: '5 Pcs', count: 0, per: '1Box' },
        { name: 'Electric Stone (Yellow)', price: 30, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'Jee boom baa', price: 30, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'Magic pops', price: 30, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'Assorted Cartoons', price: 40, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'Snake Cartoons', price: 40, Pieces: '5 Pcs', count: 0, per: '1Box' },
        { name: 'Kit Kat', price: 50, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'AXN big', price: 100, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'Snake Tablet', price: 20, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: 'Sound Marriage', price: 110, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: 'Money Bank', price: 110, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: 'Hitler', price: 110, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: '1 1/2 Twinkling star', price: 50, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: '4 Twinkling star', price: 160, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'Cash bomb', price: 300, Pieces: '2 Pcs', count: 0, per: '1Box' },
      ]
    },
    {
      title: 'Musical Items',
      products: [
        { name: 'Happy Frogs', price: 320, Pieces: '10 Pcs', count: 0, per: '1Box', img: '../../../assets/Crackers/msic.jpg' },
        { name: 'Shimmering Dream', price: 320, Pieces: '5 Pcs', count: 0, per: '1Box' },
        { name: 'Musical pencil', price: 240, Pieces: '4 Pcs', count: 0, per: '1Box' },
        { name: 'Musical rocket', price: 200, Pieces: '5 Pcs', count: 0, per: '1Box' },
        { name: 'Musical siren (Mini)', price: 240, Pieces: '5 Pcs', count: 0, per: '1Box' },
        { name: 'Musical siren (Big)', price: 320, Pieces: '3 Pcs', count: 0, per: '1Box' },
        { name: 'Train', price: 400, Pieces: '6 Pcs', count: 0, per: '1Box' },
        { name: '12 Musical shots', price: 500, Pieces: '1 Pcs', count: 0, per: '1Box' },
      ]
    },
    {
      title: 'Special Items',
      products: [
        { name: 'Holi', price: 80, Pieces: '1 Pcs', count: 0, per: '1Box', img: '../../../assets/Crackers/peacock.webp' },
        { name: 'Selfie stick (white)', price: 140, Pieces: '3 Pcs', count: 0, per: '1Box' },
        { name: 'Selfie stick (Red)', price: 150, Pieces: '3 Pcs', count: 0, per: '1Box' },
        { name: 'Selfie stick (Green)', price: 150, Pieces: '3 Pcs', count: 0, per: '1Box' },
        { name: 'Peacock pops', price: 160, Pieces: '5 Pcs', count: 0, per: '1Box' },
        { name: 'Silver pops', price: 160, Pieces: '5 Pcs', count: 0, per: '1Box' },
        { name: 'Photo flash', price: 100, Pieces: '5 Pcs', count: 0, per: '1Box' },
        { name: 'Helicopter', price: 200, Pieces: '5 Pcs', count: 0, per: '1Box' },
        { name: 'Bambarum', price: 200, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'Butterfly', price: 200, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'Drone', price: 200, Pieces: '5 Pcs', count: 0, per: '1Box' },
        { name: 'Penta magic', price: 200, Pieces: '5 Pcs', count: 0, per: '1Box' },
        { name: '4 Tin Beer', price: 200, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: '6 Tin Beer', price: 300, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: 'Elephant', price: 400, Pieces: '2 Pcs', count: 0, per: '1Box' },
        { name: 'Dragon Stick', price: 300, Pieces: '5 Pcs', count: 0, per: '1Box' },
        { name: 'Water queen', price: 280, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: 'Peacock', price: 280, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: 'Neemo Fish', price: 400, Pieces: '4 Pcs', count: 0, per: '1Box' },
        { name: 'Duck or Lion or Train', price: 600, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: 'Bada Peacock', price: 600, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: 'Sword Small', price: 200, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: 'Sword Big', price: 300, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: 'Rainbo colour (Smoke)', price: 280, Pieces: '3 Pcs', count: 0, per: '1Box' },
        { name: 'Smoke stick (colour)', price: 160, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: 'Bat Ball', price: 360, Pieces: '1 Pce', count: 0, per: '1Box' },
      ]
    },
    {
      title: 'Aerials',
      products: [
        { name: '1 1/2 Pipe', price: 100, Pieces: '1 Pce', count: 0, per: '1Box', img: '../../../assets/Crackers/pipe.jpg' },
        { name: '1 3/4 Pipe', price: 400, Pieces: '3 Pcs', count: 0, per: '1Box' },
        { name: '2 Pipe', price: 200, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: '3 Pipe', price: 400, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: '4" Pipe', price: 800, Pieces: '1 Pce', count: 0, per: '1Box' },
      ]
    },
    {
      title: 'Fancy shots',
      products: [
        { name: '7 Shots', price: 200, Pieces: '5 Pcs', count: 0, per: '1Box', img: '../../../assets/Crackers/fancy.webp' },
        { name: '8 Shots (Paper shot)', price: 750, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: '12 Shots raider', price: 240, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: '25 Shots raider', price: 400, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: '50 Shots raider', price: 600, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: '15 Shots smoke', price: 1000, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: '30 Shots', price: 620, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: '60 Shots', price: 1240, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: '120 Shots', price: 2480, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: '240 Shots', price: 4960, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: '500 Shots', price: 10000, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: 'Laser Show (Setout 2")', price: 5000, Pieces: '1 Pce', count: 0, per: '1Box' },
        { name: 'Thunder (Setout 3")', price: 6500, Pieces: '1 Pce', count: 0, per: '1Box' },
      ]
    },
    {
      title: 'Sparklers',
      products: [
        { name: '7 cm Electric Sparklers', price: 38, Pieces: '10 Pcs', count: 0, per: '1Box', img: '../../../assets/Crackers/spark.jpg' },
        { name: '7 cm Crackling Sparklers', price: 38, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: '7 cm Green Sparklers', price: 38, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: '7 cm Red Sparklers', price: 38, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: '10 cm Electric Sparklers', price: 50, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: '10 cm Crackling Sparklers', price: 50, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: '10 cm Green Sparklers', price: 50, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: '10 cm Red Sparklers', price: 50, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: '12 cm Electric Sparklers', price: 64, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: '12 cm Crackling Sparklers', price: 64, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: '12 cm Green Sparklers', price: 64, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: '12 cm Red Sparklers', price: 64, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: '15 cm Electric Sparklers', price: 98, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: '15 cm Crackling Sparklers', price: 98, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: '15 cm Green Sparklers', price: 98, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: '15 cm Red Sparklers', price: 98, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: '10 cm Orange Sparklers', price: 180, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: '10 cm Pink Sparklers', price: 190, Pieces: '10 Pcs', count: 0, per: '1Box' },
        { name: '30 cm Electric Sparklers', price: 98, Pieces: '5 Pcs', count: 0, per: '1Box' },
        { name: '30 cm Crackling Sparklers', price: 98, Pieces: '5 Pcs', count: 0, per: '1Box' },
        { name: '30 cm Green Sparklers', price: 98, Pieces: '5 Pcs', count: 0, per: '1Box' },
        { name: '30 cm Red Sparklers', price: 98, Pieces: '5 Pcs', count: 0, per: '1Box' },
        { name: '40 cm Electric Sparklers', price: 300, Pieces: '5 Pcs', count: 0, per: '1Box' },
        { name: 'Lovely Sparklers (4 in 1)', price: 300, Pieces: '4 Pcs', count: 0, per: '1Box' },
        { name: '50 cm Electric Sparklers', price: 320, Pieces: '5 Pcs', count: 0, per: '1Box' },
        { name: '50 cm Crackling Sparklers', price: 320, Pieces: '5 Pcs', count: 0, per: '1Box' },
        { name: 'Umbrella Sparklers', price: 400, Pieces: '1 Pce', count: 0, per: '1Box' },
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {

  }
  select_Products: any = []
  incrementCount(categoryIndex: number, productIndex: number): void {
    const category = this.crackersData?.[categoryIndex];
    const product = category?.products?.[productIndex];
    this.select_Products.push(product)

    if (product && product.count !== undefined) {
      product.count++;
    }

  }

  decrementCount(categoryIndex: number, productIndex: number): void {
    const category = this.crackersData?.[categoryIndex];
    const product = category?.products?.[productIndex];
    

    if (product && product.count !== undefined && product.count > 0) {
      product.count--;
    }
  }


  // Function to calculate the total value of all products
  getTotalValue(): number {
    let total = 0;
    this.crackersData.forEach(category => {
      category.products.forEach(product => {
        total += product.price * product.count;
      });
    });
    return total;
  }

  // Function to share total value via WhatsApp
  shareOnWhatsApp(): void {
    let message = 'Crackers Summary:\n\n';
    this.crackersData.forEach(category => {
      const validProducts = category.products.filter(product => product.count > 0);
      if (validProducts.length > 0) {
        message += `${category.title}:\n`;
        category.products.forEach(product => {
          const rowTotal = product.price * product.count;
          if (rowTotal != 0) {
            message += `- ${product.name}: Price: ₹${product.price}, Pieces: ${product.count}, Per: ${product.per}, Total: ₹${rowTotal}\n`;
          }
        });
        message += '\n'; // Add an extra line for better readability
      }
    });
    message += `Total Value: ₹${this.getTotalValue()}\n`;
    const phoneNumber = '6379562195'; // Replace with the specific number
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    // const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');

  }

  // Function to share total value via email
  shareViaEmail(): void {
    let message = 'Crackers Summary:\n\n';
    this.crackersData.forEach(category => {
      const validProducts = category.products.filter(product => product.count > 0);
      if (validProducts.length > 0) {
        message += `${category.title}:\n`;
        category.products.forEach(product => {
          const rowTotal = product.price * product.count;
          if (rowTotal != 0) {
            message += `- ${product.name}: Price: ₹${product.price}, Pieces: ${product.count}, Per: ${product.per}, Total: ₹${rowTotal}\n`;
          }
        });
        message += '\n';
      }
    });
    message += `Total Value: ₹${this.getTotalValue()}\n`;
    const mailtoLink = `mailto:${this.Email}?body=${encodeURIComponent(message)}`;
    window.open(mailtoLink, '_self');
  }
  counttotal: any;
  // Generate PDF
  generatePDF(): void {
    const doc = new jsPDF();
    let lastYPosition = 20; // Start position for the first table

    doc.text('Crackers Summary', 14, 16);

    this.crackersData.forEach((category, categoryIndex) => {
      // Filter products where count > 0
      const filteredProducts = category.products.filter(product => product.count > 0);

      // Only proceed if there are products to show
      if (filteredProducts.length > 0) {
        const data = filteredProducts.map(product => [
          product.name,
          product.price,
          product.count,
          product.per,
          product.price * product.count
        ]);

        // Render the table
        autoTable(doc, {
          head: [['Product Name', 'Price', 'Count', 'Per', 'Total']],
          body: data,
          startY: lastYPosition // Start new table after the previous one
        });

        // Access the final Y position of the last table from doc.lastAutoTable.finalY
        lastYPosition = (doc as any).lastAutoTable.finalY + 10; // Update lastYPosition to the end of this table
      }
    });

    // Add total value at the end
    doc.text(`Total Value: ${this.getTotalValue()}`, 14, lastYPosition);

    // Save the PDF
    doc.save('crackers-summary.pdf');
    this.counttotal = doc.save('crackers-summary.pdf');
    
  }

  // Function to generate PDF and let the user download it
  shareAsPDF(): void {
    this.generatePDF(); // Call the function to generate and download PDF
  }

}
