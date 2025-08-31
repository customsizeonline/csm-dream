import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const SizeConfiguratorSection = () => {
  const [width, setWidth] = useState([60]);
  const [length, setLength] = useState([80]);

  return (
    <section className="py-16 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Design Your Perfect Size
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Use our interactive configurator to see exactly how your custom mattress will look
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Visual Preview */}
              <div className="flex justify-center items-center min-h-[300px] bg-gradient-subtle rounded-lg p-8">
                <div 
                  className="bg-primary rounded-lg shadow-elegant transition-all duration-300 border-4 border-accent"
                  style={{
                    width: `${(width[0] / 100) * 200 + 100}px`,
                    height: `${(length[0] / 100) * 250 + 150}px`,
                    maxWidth: '300px',
                    maxHeight: '400px'
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center text-white font-semibold">
                    {width[0]}" × {length[0]}"
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-semibold mb-4">
                    Width: {width[0]} inches
                  </label>
                  <Slider
                    value={width}
                    onValueChange={setWidth}
                    max={120}
                    min={30}
                    step={1}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-4">
                    Length: {length[0]} inches
                  </label>
                  <Slider
                    value={length}
                    onValueChange={setLength}
                    max={120}
                    min={50}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Perfect for RVs, boats, tiny homes, and unique spaces
                  </p>
                  <Button size="lg" className="w-full bg-gradient-primary hover:opacity-90">
                    Lock in My Size & Get a Quote
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};