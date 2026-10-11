const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

class ModulePdfBuilder {
  constructor({ moduleNumber, moduleTitle, marks, topics, outputFilename }) {
    this.moduleNumber = moduleNumber;
    this.moduleTitle = moduleTitle;
    this.marks = marks;
    this.topics = topics;
    this.outputPath = path.resolve(__dirname, '..', 'public', 'notes', outputFilename);

    this.doc = new PDFDocument({
      autoFirstPage: false,
      bufferPages: true,
      margin: 40,
      size: 'A4'
    });

    this.writeStream = fs.createWriteStream(this.outputPath);
    this.doc.pipe(this.writeStream);
  }

  // Cover Page
  addCoverPage() {
    this.doc.addPage();
    const { doc } = this;
    const pageWidth = doc.page.width;
    const pageHeight = doc.page.height;

    // Outer decorative border
    doc.lineWidth(2).strokeColor('#1E3A8A').rect(25, 25, pageWidth - 50, pageHeight - 50).stroke();
    doc.lineWidth(0.8).strokeColor('#0D9488').rect(29, 29, pageWidth - 58, pageHeight - 58).stroke();

    // Top Header Badge
    doc.fillColor('#1E3A8A').rect(40, 50, pageWidth - 80, 42).fill();
    doc.fillColor('#FFFFFF').fontSize(14).font('Helvetica-Bold')
       .text('KERALA PUBLIC SERVICE COMMISSION • OFFICIAL SYLLABUS NOTE', 40, 64, {
         align: 'center',
         width: pageWidth - 80
       });

    // Exam Scope Badge
    doc.moveDown(3);
    doc.fillColor('#0F172A').fontSize(12).font('Helvetica-Bold')
       .text('SURVEYOR GRADE II (SURVEY & LAND RECORDS) & KWA TRACER', { align: 'center' });
    doc.fontSize(10).font('Helvetica').fillColor('#64748B')
       .text('Cat. Nos: 411/2022, 692/2022, 106/2017, 043/2023 • Technical Education & Town Planning', { align: 'center' });

    // Module Number & Title
    doc.moveDown(3);
    doc.fillColor('#0284C7').fontSize(16).font('Helvetica-Bold')
       .text(`MODULE ${String(this.moduleNumber).padStart(2, '0')}`, { align: 'center' });

    doc.moveDown(0.5);
    doc.fillColor('#0F172A').fontSize(24).font('Helvetica-Bold')
       .text(this.moduleTitle, { align: 'center' });

    doc.moveDown(0.5);
    doc.fillColor('#059669').fontSize(13).font('Helvetica-Bold')
       .text(`Official Weightage: ${this.marks} Marks`, { align: 'center' });

    // Divider Line
    doc.moveDown(1);
    doc.lineWidth(1.5).strokeColor('#0284C7').moveTo(120, doc.y).lineTo(pageWidth - 120, doc.y).stroke();
    doc.moveDown(1.5);

    // Topics Box
    const boxX = 60;
    const boxY = doc.y;
    const boxW = pageWidth - 120;
    
    doc.fillColor('#F8FAFC').rect(boxX, boxY, boxW, 140).fill();
    doc.lineWidth(1).strokeColor('#CBD5E1').rect(boxX, boxY, boxW, 140).stroke();

    doc.fillColor('#1E293B').fontSize(12).font('Helvetica-Bold')
       .text('PRESCRIBED SYLLABUS TOPICS COVERED:', boxX + 15, boxY + 15);

    doc.fontSize(10).font('Helvetica').fillColor('#334155')
       .text(this.topics, boxX + 15, boxY + 35, {
         width: boxW - 30,
         lineGap: 4
       });

    // Key Features Callout
    doc.y = boxY + 160;
    doc.fillColor('#FEF3C7').rect(boxX, doc.y, boxW, 80).fill();
    doc.lineWidth(1).strokeColor('#F59E0B').rect(boxX, doc.y, boxW, 80).stroke();

    doc.fillColor('#92400E').fontSize(11).font('Helvetica-Bold')
       .text('⭐ COMPREHENSIVE EXAM CRACKER FEATURES', boxX + 15, doc.y + 12);
    doc.fontSize(9.5).font('Helvetica').fillColor('#78350F')
       .text('• Strictly aligned with Kerala PSC latest question patterns (Land Records & KWA)\n• Contains verified formulas, numerical shortcuts, standard tables & specifications\n• Highlights repeatedly tested PSC trap questions & previous year keys', boxX + 15, doc.y + 28, {
         lineGap: 3
       });

    // Footer on Cover
    doc.y = pageHeight - 90;
    doc.fillColor('#64748B').fontSize(9).font('Helvetica')
       .text('Kerala PSC Survey Academy • Prepared for Rank File Candidates', { align: 'center' });
    doc.fontSize(8).fillColor('#94A3B8')
       .text('Confidential Study Material • Not for Commercial Redistribution', { align: 'center' });
  }

  // Add a Chapter or Major Section
  addSectionHeader(title) {
    const { doc } = this;
    if (doc.y > doc.page.height - 120) {
      doc.addPage();
    } else {
      doc.moveDown(1.2);
    }

    const y = doc.y;
    const pageWidth = doc.page.width;

    doc.fillColor('#1E3A8A').rect(40, y, pageWidth - 80, 24).fill();
    doc.fillColor('#FFFFFF').fontSize(12).font('Helvetica-Bold')
       .text(title, 48, y + 6, { width: pageWidth - 96 });
    
    doc.moveDown(0.8);
  }

  addSubSectionHeader(subtitle) {
    const { doc } = this;
    if (doc.y > doc.page.height - 90) {
      doc.addPage();
    } else {
      doc.moveDown(0.8);
    }
    doc.fillColor('#0284C7').fontSize(11).font('Helvetica-Bold').text(subtitle);
    doc.moveDown(0.3);
  }

  // Regular paragraph text
  addParagraph(text, opts = {}) {
    const { doc } = this;
    if (doc.y > doc.page.height - 70) doc.addPage();
    doc.fillColor(opts.color || '#1F2937').fontSize(opts.size || 9.5).font(opts.font || 'Helvetica')
       .text(text, {
         align: opts.align || 'justify',
         lineGap: opts.lineGap || 3.5,
         ...opts
       });
    doc.moveDown(0.4);
  }

  // Bullet point list
  addBulletPoints(items) {
    const { doc } = this;
    items.forEach(item => {
      if (doc.y > doc.page.height - 60) doc.addPage();
      const boldPart = item.bold ? `${item.bold}: ` : '';
      doc.fillColor('#0284C7').fontSize(9.5).font('Helvetica-Bold').text('• ', 48, doc.y, { continued: true });
      if (boldPart) {
        doc.fillColor('#0F172A').font('Helvetica-Bold').text(boldPart, { continued: true });
      }
      doc.fillColor('#334155').font('Helvetica').text(item.text, {
        align: 'justify',
        lineGap: 3
      });
      doc.moveDown(0.25);
    });
    doc.moveDown(0.3);
  }

  // PSC Repeated Focus Point Callout Box
  addFocusBox(title, body) {
    const { doc } = this;
    if (doc.y > doc.page.height - 110) doc.addPage();

    const startY = doc.y;
    const boxW = doc.page.width - 80;
    
    // Measure body text height
    doc.fontSize(9).font('Helvetica');
    const textHeight = doc.heightOfString(body, { width: boxW - 20, lineGap: 3 });
    const totalH = textHeight + 28;

    doc.fillColor('#FEF3C7').rect(40, startY, boxW, totalH).fill();
    doc.lineWidth(1).strokeColor('#F59E0B').rect(40, startY, boxW, totalH).stroke();

    doc.fillColor('#B45309').fontSize(10).font('Helvetica-Bold')
       .text(`⭐ PSC FOCUS POINT: ${title}`, 50, startY + 7);

    doc.fillColor('#78350F').fontSize(9).font('Helvetica')
       .text(body, 50, startY + 22, { width: boxW - 20, lineGap: 3 });

    doc.y = startY + totalH + 8;
  }

  // Formula Vault Callout Box
  addFormulaBox(title, formulas) {
    const { doc } = this;
    if (doc.y > doc.page.height - 100) doc.addPage();

    const startY = doc.y;
    const boxW = doc.page.width - 80;

    const bodyText = Array.isArray(formulas) ? formulas.join('\n') : formulas;
    doc.fontSize(9.5).font('Helvetica-Bold');
    const textHeight = doc.heightOfString(bodyText, { width: boxW - 20, lineGap: 4 });
    const totalH = textHeight + 26;

    doc.fillColor('#EFF6FF').rect(40, startY, boxW, totalH).fill();
    doc.lineWidth(1).strokeColor('#3B82F6').rect(40, startY, boxW, totalH).stroke();

    doc.fillColor('#1D4ED8').fontSize(10).font('Helvetica-Bold')
       .text(`📐 CORE FORMULA VAULT: ${title}`, 50, startY + 7);

    doc.fillColor('#1E3A8A').fontSize(9.5).font('Helvetica-Bold')
       .text(bodyText, 50, startY + 22, { width: boxW - 20, lineGap: 4 });

    doc.y = startY + totalH + 8;
  }

  // Common PSC Trap Callout Box
  addTrapBox(trapTitle, explanation) {
    const { doc } = this;
    if (doc.y > doc.page.height - 90) doc.addPage();

    const startY = doc.y;
    const boxW = doc.page.width - 80;

    doc.fontSize(9).font('Helvetica');
    const textHeight = doc.heightOfString(explanation, { width: boxW - 20, lineGap: 3 });
    const totalH = textHeight + 26;

    doc.fillColor('#FEE2E2').rect(40, startY, boxW, totalH).fill();
    doc.lineWidth(1).strokeColor('#EF4444').rect(40, startY, boxW, totalH).stroke();

    doc.fillColor('#B91C1C').fontSize(10).font('Helvetica-Bold')
       .text(`⚠️ COMMON PSC EXAM TRAP: ${trapTitle}`, 50, startY + 7);

    doc.fillColor('#7F1D1D').fontSize(9).font('Helvetica')
       .text(explanation, 50, startY + 22, { width: boxW - 20, lineGap: 3 });

    doc.y = startY + totalH + 8;
  }

  // Clean 2-column or 3-column table with dynamic text wrapping
  addTable(headers, rows, colWidths) {
    const { doc } = this;
    const totalWidth = colWidths.reduce((a, b) => a + b, 0);
    const startX = 40;

    const drawHeader = (y) => {
      doc.fillColor('#1E3A8A').rect(startX, y, totalWidth, 20).fill();
      let colX = startX;
      headers.forEach((h, i) => {
        doc.fillColor('#FFFFFF').fontSize(8.5).font('Helvetica-Bold')
           .text(h, colX + 4, y + 5, { width: colWidths[i] - 8, align: 'left' });
        colX += colWidths[i];
      });
      return y + 20;
    };

    if (doc.y > doc.page.height - 80) doc.addPage();
    let currY = doc.y;
    currY = drawHeader(currY);

    rows.forEach((row, rIdx) => {
      // Calculate row height dynamically
      doc.fontSize(8.5).font('Helvetica');
      let maxCellHeight = 16;
      row.forEach((cell, cIdx) => {
        const h = doc.heightOfString(String(cell), { width: colWidths[cIdx] - 8, lineGap: 2 });
        if (h + 8 > maxCellHeight) {
          maxCellHeight = Math.ceil(h + 8);
        }
      });

      if (currY + maxCellHeight > doc.page.height - 50) {
        doc.addPage();
        currY = 42;
        currY = drawHeader(currY);
      }

      const bgColor = (rIdx % 2 === 0) ? '#F8FAFC' : '#FFFFFF';
      doc.fillColor(bgColor).rect(startX, currY, totalWidth, maxCellHeight).fill();
      doc.lineWidth(0.5).strokeColor('#E2E8F0').rect(startX, currY, totalWidth, maxCellHeight).stroke();

      let cX = startX;
      row.forEach((cell, cIdx) => {
        doc.fillColor('#1E293B').fontSize(8.5).font(cIdx === 0 ? 'Helvetica-Bold' : 'Helvetica')
           .text(String(cell), cX + 4, currY + 4, { width: colWidths[cIdx] - 8, align: 'left', lineGap: 2 });
        cX += colWidths[cIdx];
      });

      currY += maxCellHeight;
    });

    doc.y = currY + 8;
  }

  // Solved PSC Numerical Model Box
  addWorkedExample(title, question, steps, answer) {
    const { doc } = this;
    if (doc.y > doc.page.height - 120) doc.addPage();

    const boxW = doc.page.width - 80;
    doc.fontSize(8.5).font('Helvetica');
    const qH = doc.heightOfString(`Question: ${question}`, { width: boxW - 20, lineGap: 2.5 });
    const stepsText = Array.isArray(steps) ? steps.join('\n') : steps;
    const sH = doc.heightOfString(`Steps:\n${stepsText}\nCorrect Answer: ${answer}`, { width: boxW - 20, lineGap: 2.5 });
    const totalH = Math.ceil(qH + sH + 32);

    if (doc.y + totalH > doc.page.height - 50) {
      doc.addPage();
    }

    const y = doc.y;
    doc.fillColor('#F0FDF4').rect(40, y, boxW, totalH).fill();
    doc.lineWidth(1).strokeColor('#16A34A').rect(40, y, boxW, totalH).stroke();

    doc.fillColor('#15803D').fontSize(9.5).font('Helvetica-Bold')
       .text(`📝 PSC SOLVED NUMERICAL: ${title}`, 50, y + 6);

    doc.fillColor('#0F172A').fontSize(8.5).font('Helvetica-Bold')
       .text(`Question: ${question}`, 50, y + 20, { width: boxW - 20, lineGap: 2.5 });

    doc.fillColor('#334155').fontSize(8.5).font('Helvetica')
       .text(`Solution:\n${stepsText}`, 50, y + 20 + qH + 4, { width: boxW - 20, lineGap: 2 });

    doc.fillColor('#166534').fontSize(8.5).font('Helvetica-Bold')
       .text(`Correct Option / Answer: ${answer}`, 50, y + totalH - 13);

    doc.y = y + totalH + 8;
  }

  // High Frequency One Liners
  addOneLiners(category, points) {
    this.addSubSectionHeader(`Rapid-Fire PSC One-Liners: ${category}`);
    this.addBulletPoints(points.map(p => ({
      bold: p.q || p.key,
      text: p.a || p.value
    })));
  }

  // Finalize document: apply headers, footers & page numbers to all content pages
  finish() {
    return new Promise((resolve, reject) => {
      const { doc } = this;
      const range = doc.bufferedPageRange();
      const totalPages = range.count;

      for (let i = 1; i < totalPages; i++) {
        doc.switchToPage(i);
        const pageWidth = doc.page.width;
        const pageHeight = doc.page.height;

        // Header
        doc.fillColor('#64748B').fontSize(7.5).font('Helvetica')
           .text(`KPSC Surveyor Gr. II / KWA Tracer Study Note • Module ${this.moduleNumber}: ${this.moduleTitle}`, 40, 22, {
             width: pageWidth - 80,
             align: 'left'
           });
        doc.lineWidth(0.5).strokeColor('#CBD5E1').moveTo(40, 32).lineTo(pageWidth - 40, 32).stroke();

        // Footer
        doc.lineWidth(0.5).strokeColor('#CBD5E1').moveTo(40, pageHeight - 32).lineTo(pageWidth - 40, pageHeight - 32).stroke();
        doc.fillColor('#64748B').fontSize(7.5).font('Helvetica')
           .text('Kerala PSC Survey Academy • Rank File Master Notes', 40, pageHeight - 24, {
             align: 'left'
           });
        doc.text(`Page ${i + 1} of ${totalPages}`, 40, pageHeight - 24, {
          align: 'right',
          width: pageWidth - 80
        });
      }

      this.writeStream.on('finish', () => {
        console.log(`Generated: ${this.outputPath} (${totalPages} pages)`);
        resolve({ outputPath: this.outputPath, totalPages });
      });
      this.writeStream.on('error', reject);

      doc.end();
    });
  }
}

module.exports = { ModulePdfBuilder };
