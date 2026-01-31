import React from 'react';
import Card from './Card';
import Pill from './Pill';
import { TIMELINE, PRIZES, RULES, COLORS } from '../constants';
import { Clock, MapPin, Trophy, Discord, Check } from './Icons';

const Krackathon2026 = () => {
  return (
    <div className="space-y-12 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header Section */}
      <header className="py-12 md:py-20 text-center relative z-10">
        <div className="inline-block mb-4 px-6 py-2 rounded-full border border-k-darkest/10 dark:border-white/10 bg-white/50 dark:bg-black/30 backdrop-blur-sm text-sm font-semibold tracking-widest uppercase text-k-darker transition-colors duration-300">
          A KrackedDevs Event
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-k-darkest mb-6 leading-[0.9] transition-colors duration-300">
          KRACKATHON<br/>
          <span className="text-k-red">2026</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-k-darker font-medium text-lg md:text-xl transition-colors duration-300">
          <div className="flex items-center gap-2">
            <Clock />
            <span>14 February 2026</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-k-darkest/20 dark:bg-white/20"></div>
          <div className="flex items-center gap-2">
            <MapPin />
            <span>Online (Discord)</span>
          </div>
        </div>
      </header>

      {/* Main Grid Layout */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        
        {/* Quick Summary */}
        <div className="md:col-span-2">
          <Card category="Overview" accentColor={COLORS.red} className="h-full">
            <h2 className="text-4xl font-bold mb-8 tracking-tight text-k-darkest">Quick Summary</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-k-red uppercase tracking-wider mb-1">Format</h3>
                  <p className="text-xl font-medium text-k-darkest">Solo buildathon (no teams)</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-k-red uppercase tracking-wider mb-1">Duration</h3>
                  <p className="text-xl font-medium text-k-darkest">~6 hours of building time</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-k-red uppercase tracking-wider mb-1">Submission</h3>
                  <p className="text-xl font-medium text-k-darkest">Deploy + URL by 5:00 PM</p>
                </div>
              </div>
              
              <div className="bg-k-red/5 p-6 rounded-3xl border border-k-red/10">
                 <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-k-darkest">
                   <Trophy />
                   <span>Prizes</span>
                 </h3>
                 <p className="text-4xl font-black text-k-red mb-2">RM4,000</p>
                 <p className="text-k-darker">Total pool across 5 categories.</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Links / CTA */}
        <div className="flex flex-col gap-6">
           <Card category="Action" accentColor={COLORS.teal} className="flex-1 !bg-[#444444] dark:!bg-[#2a2a2a]" noPadding>
              <div className="p-8 h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-white">Ready to Krack?</h3>
                  <p className="text-white/70 mb-8">Join the Discord server to participate. Voice channels open at 10:30 AM.</p>
                </div>
                <a 
                  href="#" 
                  className="group relative w-full py-4 bg-white text-k-darkest font-black text-center rounded-full uppercase tracking-wider hover:bg-k-teal hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Discord />
                  Join Discord
                </a>
              </div>
           </Card>
        </div>

        {/* Timeline */}
        <div className="lg:row-span-2">
          <Card category="Schedule" accentColor={COLORS.teal} className="h-full">
            <h2 className="text-3xl font-bold mb-6 tracking-tight text-k-darkest">Timeline</h2>
            <div className="relative border-l-2 border-k-teal/20 ml-3 space-y-8 pl-8 py-2">
              {TIMELINE.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-white dark:bg-neutral-800 border-4 border-k-teal transition-transform group-hover:scale-125"></div>
                  <p className="text-sm font-bold text-k-teal mb-1">{item.time}</p>
                  <p className="text-lg font-medium text-k-darkest leading-snug">{item.event}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Prize Categories */}
        <div className="md:col-span-2">
          <Card category="Winning" accentColor={COLORS.blue}>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-k-darkest">Prize Categories</h2>
              <Pill text="RM4,000 Pool" accentColor={COLORS.blue} />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {PRIZES.map((prize, idx) => (
                <div 
                  key={idx} 
                  className="bg-white dark:bg-white/5 p-5 rounded-3xl border border-k-grid dark:border-white/5 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform origin-left inline-block">{prize.icon}</div>
                  <h3 className="font-bold text-k-darkest mb-1">{prize.title}</h3>
                  <p className="text-sm text-k-darker leading-relaxed">{prize.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Checklist */}
        <div className="">
          <Card category="Prepare" accentColor={COLORS.peach} className="h-full">
            <h2 className="text-2xl font-bold mb-6 text-k-darkest">Preparation</h2>
            <ul className="space-y-4">
              {[
                'Laptop/PC + Stable Internet',
                'Discord Account (Joined)',
                'Working Microphone',
                'Dev Environment Ready',
                'Deployment Account (Vercel/Netlify)'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 text-k-peach">
                    <Check />
                  </div>
                  <span className="font-medium text-k-darkest">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-k-peach/20">
              <p className="text-sm text-k-darker font-medium">Don't forget snacks! 🥤</p>
            </div>
          </Card>
        </div>

        {/* Rules */}
        <div className="md:col-span-1">
           <Card category="Rules" accentColor={COLORS.yellow} className="h-full">
            <h2 className="text-2xl font-bold mb-6 text-k-darkest">Key Rules</h2>
             <ul className="space-y-4">
               {RULES.slice(0, 4).map((rule) => (
                 <li key={rule.id} className="pb-3 border-b border-dashed border-k-darkest/10 dark:border-white/10 last:border-0">
                    <span className="font-bold text-k-darkest block">{rule.title}</span>
                    <span className="text-sm text-k-darker">{rule.desc}</span>
                 </li>
               ))}
             </ul>
           </Card>
        </div>

        {/* Submission Info */}
         <div className="md:col-span-1">
           <Card category="Deploy" accentColor={COLORS.red} className="h-full !bg-slate-50 dark:!bg-zinc-800/50">
             <h2 className="text-2xl font-bold mb-4 text-k-darkest">Submission</h2>
             <p className="text-sm text-k-darker mb-6">
               Post to <span className="font-mono bg-k-grid dark:bg-white/10 px-1 rounded text-k-red">#krackathon-submissions</span> by 5:00 PM.
             </p>
             <div className="bg-white dark:bg-black/20 p-4 rounded-2xl border border-k-grid dark:border-white/10 font-mono text-xs text-k-darkest overflow-x-auto whitespace-pre">
{`Name: [Your Name]
Project: [Name]
URL: [Live Link]
GitHub: [Optional]
Desc: [1-2 sentences]`}
             </div>
           </Card>
        </div>
        
         {/* Help/Contact */}
         <div className="md:col-span-3">
            <div className="bg-[#444] dark:bg-[#2a2a2a] rounded-[40px] p-8 md:p-12 text-center shadow-card text-white relative overflow-hidden transition-colors duration-300">
               <div className="relative z-10 max-w-2xl mx-auto">
                 <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
                 <p className="text-lg text-white/80 mb-8">
                   Check <span className="font-mono bg-white/10 px-2 py-1 rounded">#krackathon-help</span> or look for the green 
                   <span className="text-[#43b581] font-bold mx-1">Staff</span> role in Discord.
                 </p>
                 <div className="flex justify-center gap-6 text-sm font-bold tracking-widest uppercase opacity-60">
                    <span>hello@krackeddevs.com</span>
                    <span>•</span>
                    <span>Discord Server</span>
                 </div>
               </div>
               
               <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-k-teal rounded-full mix-blend-overlay opacity-20 blur-3xl"></div>
               <div className="absolute -right-20 -top-20 w-64 h-64 bg-k-red rounded-full mix-blend-overlay opacity-20 blur-3xl"></div>
            </div>
         </div>

      </main>

      <footer className="text-center text-k-darker text-sm font-medium py-8">
        <p>© 2026 KrackedDevs. May the most kracked win! 🚀</p>
      </footer>
    </div>
  );
}

export default Krackathon2026;