import React from 'react';
import Card from './Card';
import Pill from './Pill';
import { Clock, MapPin, Trophy, Discord, Check } from './Icons';

// Cyberpunk / Futuristic Override Colors
const CYBER_COLORS = {
  neonPurple: '#d946ef', // Fuchsia 500
  neonCyan: '#06b6d4',   // Cyan 500
  neonLime: '#84cc16',   // Lime 500
  neonOrange: '#f97316', // Orange 500
  neonPink: '#ec4899',   // Pink 500
};

const Krackathon2027 = () => {
  return (
    <div className="space-y-12 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500 font-mono">
      
      {/* 2027 Thematic Overrides */}
      <style>{`
        .theme-2027 {
          --k-bg: #09090b;
          --k-grid: #27272a;
          --k-darkest: #e4e4e7;
          --k-darker: #a1a1aa;
          --k-card-bg: #18181b;
          font-family: 'Courier New', monospace;
        }
      `}</style>

      {/* Header Section */}
      <header className="py-12 md:py-20 text-center relative z-10">
        <div className="inline-block mb-4 px-6 py-2 rounded-none border border-cyan-500/30 bg-cyan-900/10 backdrop-blur-md text-xs font-bold tracking-[0.3em] uppercase text-cyan-400">
          :: System V2.0 ::
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-white mb-6 leading-[0.9] drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]">
          KRACK<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">ATHON</span><br/>
          <span className="text-cyan-400">2027</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-zinc-400 font-bold text-lg md:text-xl uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Clock />
            <span>14.02.2027</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-zinc-700"></div>
          <div className="flex items-center gap-2">
            <MapPin />
            <span>Neural Link (Global)</span>
          </div>
        </div>
      </header>

      {/* Main Grid Layout */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        
        {/* Quick Summary */}
        <div className="md:col-span-2">
          <Card category="Protocol" accentColor={CYBER_COLORS.neonPurple} className="h-full border border-fuchsia-500/20 !bg-zinc-900/80 backdrop-blur-xl">
            <h2 className="text-4xl font-bold mb-8 tracking-tight text-white uppercase">Mission Brief</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold text-fuchsia-500 uppercase tracking-widest mb-1">Architecture</h3>
                  <p className="text-xl font-bold text-zinc-200">Full-Stack Immersive</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-fuchsia-500 uppercase tracking-widest mb-1">Timebox</h3>
                  <p className="text-xl font-bold text-zinc-200">8.0 Hours</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-fuchsia-500 uppercase tracking-widest mb-1">Output</h3>
                  <p className="text-xl font-bold text-zinc-200">Working Prototype</p>
                </div>
              </div>
              
              <div className="bg-fuchsia-900/20 p-6 rounded-3xl border border-fuchsia-500/30">
                 <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
                   <Trophy />
                   <span>Bounty</span>
                 </h3>
                 <p className="text-4xl font-black text-fuchsia-400 mb-2">10,000 CREDITS</p>
                 <p className="text-zinc-400 text-xs uppercase tracking-widest">Distributed via Smart Contract</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Links / CTA */}
        <div className="flex flex-col gap-6">
           <Card category="Access" accentColor={CYBER_COLORS.neonCyan} className="flex-1 !bg-black border border-cyan-500/30" noPadding>
              <div className="p-8 h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/20 rounded-full blur-[80px] -mr-10 -mt-10 animate-pulse"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-white uppercase">Initialize</h3>
                  <p className="text-cyan-200/70 mb-8 text-sm">Uplink established. Waiting for user input to join the network.</p>
                </div>
                <a 
                  href="#" 
                  className="group relative w-full py-4 bg-cyan-500 text-black font-black text-center rounded-none uppercase tracking-widest hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 clip-path-polygon"
                  style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
                >
                  <Discord />
                  Jack In
                </a>
              </div>
           </Card>
        </div>

        {/* Timeline */}
        <div className="lg:row-span-2">
          <Card category="Sequence" accentColor={CYBER_COLORS.neonLime} className="h-full border border-lime-500/20 !bg-zinc-900/80">
            <h2 className="text-3xl font-bold mb-6 tracking-tight text-white uppercase">Execution Order</h2>
            <div className="relative border-l-2 border-lime-500/20 ml-3 space-y-10 pl-8 py-2">
              {[
                { time: '10:00', event: 'System Boot / Rules' },
                { time: '10:15', event: 'Prompt Decryption' },
                { time: '10:30', event: 'coding_cycle_start()' },
                { time: '13:00', event: 'Nutrient Intake' },
                { time: '17:30', event: 'Compile & Deploy' },
                { time: '18:00', event: 'Judgement Protocol' }
              ].map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[39px] top-1.5 w-5 h-5 bg-black border-2 border-lime-500 rotate-45 transition-transform group-hover:rotate-90"></div>
                  <p className="text-xs font-bold text-lime-500 mb-1 tracking-widest">{item.time}</p>
                  <p className="text-lg font-bold text-zinc-200 leading-snug">{item.event}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Prize Categories */}
        <div className="md:col-span-2">
          <Card category="Targets" accentColor={CYBER_COLORS.neonOrange}>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-white uppercase">Achievements</h2>
              <Pill text="High Value Targets" accentColor={CYBER_COLORS.neonOrange} />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: 'Architect', desc: 'Best System Design' },
                { title: 'Visionary', desc: 'Most Futuristic UX' },
                { title: 'Hacker', desc: 'Most Creative Solution' },
              ].map((prize, idx) => (
                <div 
                  key={idx} 
                  className="bg-zinc-900/50 p-5 border border-zinc-800 hover:border-orange-500/50 transition-all group"
                >
                  <h3 className="font-bold text-orange-500 mb-1 uppercase tracking-wider">{prize.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{prize.desc}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Checklist */}
        <div className="">
          <Card category="Loadout" accentColor={CYBER_COLORS.neonPink} className="h-full border border-pink-500/20 !bg-zinc-900/80">
            <h2 className="text-2xl font-bold mb-6 text-white uppercase">Requirements</h2>
            <ul className="space-y-4">
              {[
                'Neural Interface (Gen 3)',
                'Quantum Terminal',
                'Bio-Auth ID',
                'Synthentic Caffiene'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 text-pink-500">
                    <Check />
                  </div>
                  <span className="font-medium text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        
         {/* Help/Contact */}
         <div className="md:col-span-3">
            <div className="bg-black border border-white/10 p-8 md:p-12 text-center shadow-card text-white relative overflow-hidden transition-colors duration-300">
               <div className="relative z-10 max-w-2xl mx-auto">
                 <h2 className="text-3xl font-bold mb-6 uppercase tracking-widest">Support Ticket</h2>
                 <p className="text-lg text-zinc-500 mb-8 font-mono">
                   Ping <span className="text-white bg-white/10 px-2 py-1">@root</span> in the mainframe.
                 </p>
               </div>
               
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>
         </div>

      </main>

      <footer className="text-center text-zinc-600 text-xs font-mono py-8 uppercase tracking-[0.2em]">
        <p>End of Line.</p>
      </footer>
    </div>
  );
}

export default Krackathon2027;