"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

interface RecruitmentSectionProps {
    delay?: number;
}

export function RecruitmentSection({ delay = 0 }: RecruitmentSectionProps) {
    return (
        <section className="w-full max-w-[1200px] mt-12 mb-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay, ease: "easeOut" }}
                className="relative overflow-hidden bg-white border border-gray-100 rounded-2xl shadow-sm p-8 md:p-12 text-center"
            >
                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                    <Sparkles className="w-32 h-32 text-[#FF69B4]" />
                </div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-50 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
                            Want to Contribute?
                        </h2>
                        <p className="text-lg text-gray-500 font-medium">
                            Tuyển thành viên tham gia dự án
                        </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                        Nhóm đang thiếu nhân lực, rất cần tuyển thêm thành viên. Nếu bạn
                        muốn tham gia, hãy liên hệ với tôi qua Facebook nhé!
                    </p>

                    <Link
                        href="https://www.facebook.com/F.Ena.2001/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#FF69B4] hover:bg-[#ff5cae] text-white font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-pink-200 hover:-translate-y-1"
                    >
                        <span>Liên hệ</span>
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
