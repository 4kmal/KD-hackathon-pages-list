import React from 'react';
import Card from './components/Card';
import Pill from './components/Pill';
import { TIMELINE, PRIZES, RULES, COLORS } from './constants';
import { 
  DiscordLogoIcon, 
  RocketIcon, 
  TimerIcon, 
  CheckCircledIcon, 
  LightningBoltIcon,
  ExclamationTriangleIcon
} from '@radix-ui/react-icons'; // Using lucide or simple svgs if radix not avail, but assuming standard lib usage is ok. Since prompt said "popular libraries", I'll use simple SVGs to avoid dependency hell in generated code.

// Simple Icon Components to avoid external dependencies for this specific response
const Clock = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>;
const MapPin = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>;
const Trophy = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172v-1.38c0-.498-.36-1.166-.867-1.533-2.934-2.108-4.509-2.108-7.443 0-.507.367-.866 1.035-.866 1.534v1.379c0 1.125.358 2.163.982 3.172m-9.694-8.601A3 3 0 0 1 17.25 7.5h.75a2.25 2.25 0 0 1 2.25 2.25v2.446c0 .94-.52 1.777-1.32 2.206M4.453 7.641A3 3 0 0 0 3.75 7.5h-.75a2.25 2.25 0 0 0-2.25 2.25v2.446c0 .94.52 1.777 1.32 2.206" /></svg>;
const Warning = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>;
const Discord = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.772-.6057 1.1431-2.241-.3366-4.4916-.3366-6.6895 0-.1665-.3711-.4056-.7625-.6214-1.1431a.0738.0738 0 00-.0785-.0371 19.7363 19.7363 0 00-4.8852 1.5152.0641.0641 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0857 2.157 2.419 0 1.3332-.946 2.419-2.1569 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0857 2.157 2.419 0 1.3332-.946 2.419-2.1569 2.419z" clipRule="evenodd" /></svg>

function App() {
  return (
    <div className="max-w-[1400px] mx-auto p-4 md:p-8 space-y-12 pb-24">
      
      {/* Header Section */}
      <header className="py-12 md:py-20 text-center relative z-10">
        <div className="inline-block mb-4 px-6 py-2 rounded-full border border-k-darkest/10 bg-white/50 backdrop-blur-sm text-sm font-semibold tracking-widest uppercase text-k-darker">
          A KrackedDevs Event
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-k-darkest mb-6 leading-[0.9]">
          KRACKATHON<br/>
          <span className="text-k-red">2026</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-k-darker font-medium text-lg md:text-xl">
          <div className="flex items-center gap-2">
            <Clock />
            <span>14 February 2026</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-k-darkest/20"></div>
          <div className="flex items-center gap-2">
            <MapPin />
            <span>Online (Discord)</span>
          </div>
        </div>
      </header>

      {/* Main Grid Layout */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        
        {/* Quick Summary - Wide Card on Desktop */}
        <div className="md:col-span-2">
          <Card category="Overview" accentColor={COLORS.red} className="h-full">
            <h2 className="text-4xl font-bold mb-8 tracking-tight">Quick Summary</h2>
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
                 <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
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
           <Card category="Action" accentColor={COLORS.teal} className="flex-1 bg-k-darkest !text-white !bg-[#444444]" noPadding>
              <div className="p-8 h-full flex flex-col justify-between relative overflow-hidden">
                {/* Decorative blob */}
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

        {/* Timeline - Tall Card */}
        <div className="lg:row-span-2">
          <Card category="Schedule" accentColor={COLORS.teal} className="h-full">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Timeline</h2>
            <div className="relative border-l-2 border-k-teal/20 ml-3 space-y-8 pl-8 py-2">
              {TIMELINE.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-k-teal transition-transform group-hover:scale-125"></div>
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
              <h2 className="text-3xl font-bold tracking-tight">Prize Categories</h2>
              <Pill text="RM4,000 Pool" accentColor={COLORS.blue} />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {PRIZES.map((prize, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-5 rounded-3xl border border-k-grid shadow-sm hover:shadow-md transition-shadow group"
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
            <h2 className="text-2xl font-bold mb-6">Preparation</h2>
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                    </svg>
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
            <h2 className="text-2xl font-bold mb-6">Key Rules</h2>
             <ul className="space-y-4">
               {RULES.slice(0, 4).map((rule) => (
                 <li key={rule.id} className="pb-3 border-b border-dashed border-k-darkest/10 last:border-0">
                    <span className="font-bold text-k-darkest block">{rule.title}</span>
                    <span className="text-sm text-k-darker">{rule.desc}</span>
                 </li>
               ))}
             </ul>
           </Card>
        </div>

        {/* Submission Info */}
         <div className="md:col-span-1">
           <Card category="Deploy" accentColor={COLORS.red} className="h-full bg-slate-50">
             <h2 className="text-2xl font-bold mb-4">Submission</h2>
             <p className="text-sm text-k-darker mb-6">
               Post to <span className="font-mono bg-k-grid px-1 rounded text-k-red">#krackathon-submissions</span> by 5:00 PM.
             </p>
             <div className="bg-white p-4 rounded-2xl border border-k-grid font-mono text-xs text-k-darker overflow-x-auto whitespace-pre">
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
            <div className="bg-[#444] rounded-[40px] p-8 md:p-12 text-center shadow-card text-white relative overflow-hidden">
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
               
               {/* Decorative background elements matching the geometric vibe */}
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

export default App;