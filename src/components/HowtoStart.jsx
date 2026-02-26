import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, MousePointer2, CreditCard, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HowtoStart = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const cards = [
        {
            id: 1,
            title: "D-Order의 자세한 기능 알아보기",
            icon: <BookOpen size={32} className="text-orange-500" />,
            action: () => navigate('/manual'),
            bgColor: "bg-orange-50",
            hoverBorder: "hover:border-orange-200"
        },
        {
            id: 2,
            title: "디오더 서비스 사용해보기",
            icon: <MousePointer2 size={32} className="text-blue-500" />,
            action: () => navigate('/trial'),
            bgColor: "bg-blue-50",
            hoverBorder: "hover:border-blue-200"
        },
        {
            id: 3,
            title: "사용 방법 및 요금 안내",
            icon: <CreditCard size={32} className="text-green-500" />,
            action: () => setIsModalOpen(true),
            bgColor: "bg-green-50",
            hoverBorder: "hover:border-green-200"
        }
    ];

    return (
        <section className="min-h-screen bg-black py-10 px-6 flex flex-col items-center justify-center font-pretendard">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center pt-[128px]">어디서 부터 시작해야 할지 <br /> 
            모르겠다면?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                {cards.map((card) => (
                    <motion.div
                        key={card.id}
                        whileHover={{ y: -5 }}
                        onClick={card.action}
                        className={`${card.bgColor} p-8 rounded-[2rem] cursor-pointer border border-transparent ${card.hoverBorder} transition-all duration-300 relative group overflow-hidden`}
                    >
                        <div className="flex flex-col h-full justify-between relative z-10">
                            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                {card.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold leading-tight group-hover:opacity-80 transition-opacity">
                                    {card.title}
                                </h3>
                                <div className="mt-4 flex items-center text-sm font-bold opacity-50 group-hover:opacity-100 transition-opacity group-hover:gap-2">
                                    바로가기 <ChevronRight size={16} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Price Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
                        <motion.div 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setIsModalOpen(false)}
                        />
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-white w-full max-w-md rounded-[2.5rem] p-8 md:p-10 relative z-10 shadow-2xl text-center"
                        >
                            <h3 className="text-2xl font-black mb-2">비영리 구간 요금제</h3>
                            <p className="text-gray-400 text-sm mb-8">서버 유지비용만 청구됩니다.</p>
                            
                            <div className="space-y-4 text-left">
                                <PriceRow title="Lite" count="30개 이하" price="4,000원" color="bg-gray-100" />
                                <PriceRow title="Standard" count="60개 이하" price="7,000원" color="bg-blue-50 text-blue-600" isPopular />
                                <PriceRow title="Pro" count="100개 이하" price="9,000원" color="bg-orange-50 text-orange-600" />
                            </div>

                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="mt-8 w-full bg-black text-white py-4 rounded-2xl font-bold hover:scale-[1.02] transition-transform"
                            >
                                확인했습니다
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

const PriceRow = ({ title, count, price, color, isPopular }) => (
    <div className={`flex items-center justify-between p-5 rounded-2xl ${color} relative`}>
        <div>
            <span className="font-bold text-lg block">{title}</span>
            <span className="text-xs opacity-60">테이블 {count}</span>
        </div>
        <span className="font-bold text-xl">{price}</span>
        {isPopular && (
            <span className="absolute -top-3 right-4 bg-blue-600 text-white text-[10px] px-2 py-1 rounded-full font-bold shadow-sm">
                POPULAR
            </span>
        )}
    </div>
);

export default HowtoStart;
