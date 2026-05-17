import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Download, Sparkles, Upload } from 'lucide-react';
import { motion } from 'framer-motion';

// NEXT.JS + VERCEL READY PROJECT
// Save this file as: app/page.jsx

export default function RPMTemplateGeneratorFinal() {
  const [form, setForm] = useState({
    sekolah: 'SMP Negeri 1 Labuhan Haji',
    mapel: 'IPS',
    kelas: 'VIII',
    semester: 'Genap',
    fase: 'D',
    materi: '',
    tujuan: '',
    guru: '',
    nipGuru: '',
    kepalaSekolah: '',
    nipKepsek: ''
  });

  const [output, setOutput] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateRPM = () => {
    const result = `RENCANA PELAKSANAAN PEMBELAJARAN MENDALAM (RPM)\n\nSatuan Pendidikan : ${form.sekolah}\nMata Pelajaran : ${form.mapel}\nFase/Kelas/Semester : ${form.fase} / ${form.kelas} / ${form.semester}\nMateri Pokok : ${form.materi}\nAlokasi Waktu : 1 x 3 JP\n\nI. IDENTIFIKASI\nKesiapan Peserta Didik\n\nII. DESAIN PEMBELAJARAN\n${form.tujuan}\n\nIII. PENGALAMAN BELAJAR\nPendahuluan - Inti - Penutup\n\nIV. ASESMEN\nDiagnostik - Formatif - Sumatif\n\nGuru: ${form.guru}`;
    setOutput(result);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-6"
      >
        Modul Ajar Generator AI
      </motion.h1>

      <Tabs defaultValue="generator">
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="generator">Form RPM</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="generator">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <Input name="materi" placeholder="Materi Pokok" onChange={handleChange} />
                <Textarea name="tujuan" placeholder="Tujuan Pembelajaran" onChange={handleChange} />
                <Input name="guru" placeholder="Nama Guru" onChange={handleChange} />
                <Button onClick={generateRPM} className="w-full">
                  <Sparkles className="mr-2 h-4 w-4" /> Generate RPM
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Textarea value={output} readOnly className="min-h-[500px]" />
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <Button><Download className="mr-2 h-4 w-4" /> DOCX</Button>
                  <Button><Upload className="mr-2 h-4 w-4" /> PDF</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="preview">
          <Card>
            <CardContent className="p-6">
              <pre className="whitespace-pre-wrap">{output || 'Belum ada dokumen dibuat.'}</pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
