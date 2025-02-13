import React from 'react';
import { Bot as Lotus, BookOpen, ListChecks, History } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(38,38,38)_1px,transparent_0)] bg-[length:40px_40px] opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-24 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-white to-transparent opacity-30" />
          <h1 className="text-6xl font-extralight tracking-tight mb-6">
            <span className="font-bold block mt-2">Zazen Meditation</span>
          </h1>
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-white via-white to-transparent opacity-30" />
        </div>

        {/* Main Content */}
        <div className="grid gap-16 relative">
          {/* What is Zazen */}
          <section className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative border border-white/10 backdrop-blur-sm bg-black/40 p-12 rounded-2xl">
              <div className="flex items-center mb-8">
                <BookOpen className="w-10 h-10 stroke-[1.5] mr-6" />
                <h2 className="text-3xl font-light tracking-wide">
                  What is <span className="font-bold">Zazen</span> Meditation?
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Zazen (座禅) literally means "seated meditation" in Japanese.
                It's the core of Zen Buddhist, emphasising the importance of
                sitting in meditation to realize the true nature of things.
                Zazen is about simply being sitting with an upright posture,
                breathing naturally, and observing thoughts without
                distractions.
              </p>
            </div>
          </section>

          {/* Why Practice Zazen */}
          <section className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative border border-white/10 backdrop-blur-sm bg-black/40 p-12 rounded-2xl">
              <div className="flex items-center mb-8">
                <Lotus className="w-10 h-10 stroke-[1.5] mr-6" />
                <h2 className="text-3xl font-light tracking-wide">
                  Why Do Buddhists Practice{' '}
                  <span className="font-bold">Zazen</span>?
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                Buddhists practice Zazen as a direct path to enlightenment
                (悟り). Zazen allows Buddhists to:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                <li className="flex items-center space-x-4 border-l border-white/10 pl-6">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>
                    Develop clarity and insight into the nature of existence
                  </span>
                </li>
                <li className="flex items-center space-x-4 border-l border-white/10 pl-6">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>
                    Understand the true nature of the self and reality
                  </span>
                </li>
                <li className="flex items-center space-x-4 border-l border-white/10 pl-6">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Find inner peace and reduce dukkha</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Step-by-Step Guide */}
          <section className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative border border-white/10 backdrop-blur-sm bg-black/40 p-12 rounded-2xl">
              <div className="flex items-center mb-12">
                <ListChecks className="w-10 h-10 stroke-[1.5] mr-6" />
                <h2 className="text-3xl font-light tracking-wide">
                  How to Practice <span className="font-bold">Zazen</span>
                </h2>
              </div>
              <div className="grid gap-8 relative">
                <div className="absolute left-[2.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-white/5 via-white/10 to-transparent" />
                {[
                  {
                    title: 'Beginning the Practice',
                    description:
                      'Perform monjin (bow) to the wall and then to the room. This gesture shows respect for the practice and the space.',
                  },
                  {
                    title: 'Taking Your Seat',
                    description:
                      'Sit down on your zafu (meditation cushion) and position your hands in the cosmic mudra: left hand on right, palms up, thumbs touching lightly.',
                  },
                  {
                    title: 'Preparing the Body and Mind',
                    description:
                      'Adjust your eyes to a 45-degree downward gaze. Take a deep breath and gently sway left to right, gradually decreasing the movement until still.',
                  },
                  {
                    title: 'The Meditation Period',
                    description:
                      'When the singing bell sounds, begin your meditation. Breathe naturally from the abdomen through the nose. Simply sit, without judgment, letting thoughts come and go.',
                  },
                  {
                    title: 'Concluding the Practice',
                    description:
                      'At the sound of the ending bell, bow to the wall, sway gently, then turn to your right. Stand up behind your chair, face the wall, and perform monjin to both wall and room.',
                  },
                ].map((step, index) => (
                  <div key={index} className="flex items-start group/step">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black group-hover/step:border-white/40 transition-colors">
                        <span className="text-lg font-light">{index + 1}</span>
                      </div>
                    </div>
                    <div className="ml-8">
                      <h3 className="text-xl font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* History */}
          <section className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative border border-white/10 backdrop-blur-sm bg-black/40 p-12 rounded-2xl">
              <div className="flex items-center mb-8">
                <History className="w-10 h-10 stroke-[1.5] mr-6" />
                <h2 className="text-3xl font-light tracking-wide">
                  History and <span className="font-bold">Origins</span>
                </h2>
              </div>
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <p>
                  Zazen's origins can be traced back to the Buddha himself, who
                  attained enlightenment while meditating under the Bodhi tree.
                  However, the specific practice of Zazen as we know it today
                  was emphasized by Dōgen Zenji, a 13th-century Japanese Zen
                  master who founded the Sōtō school of Zen.
                </p>
                <p>
                  After studying in China, Dōgen brought this practice back to
                  Japan and established it as the core of Zen practice
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center mt-16 opacity-60"></footer>
        </div>
      </div>
    </div>
  );
}

export default App;
