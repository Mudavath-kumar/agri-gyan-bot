import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import type { User } from '@supabase/supabase-js';

const DiseaseScanner = () => {
  const [user, setUser] = useState<User | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);
  const [recentScans, setRecentScans] = useState<any[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchRecentScans(session.user.id);
      }
    });
  }, []);

  const fetchRecentScans = async (userId: string) => {
    const { data, error } = await supabase
      .from('disease_detections')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(5);
    
    if (error) {
      console.error('Error fetching scans:', error);
    } else {
      setRecentScans(data || []);
    }
  };

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const scanImage = async () => {
    if (!selectedImage || !user) {
      toast({
        title: "Error",
        description: "Please select an image and sign in to scan.",
        variant: "destructive",
      });
      return;
    }

    setScanning(true);
    
    try {
      // Mock AI disease detection - in real app would call ML model
      const mockDiseases = [
        {
          name: 'Leaf Blight',
          confidence: 0.89,
          severity: 'moderate',
          treatments: ['Apply copper fungicide', 'Improve air circulation', 'Remove affected leaves'],
          description: 'A common fungal disease affecting leaf tissues, causing brown spots and yellowing.'
        },
        {
          name: 'Powdery Mildew',
          confidence: 0.76,
          severity: 'mild',
          treatments: ['Apply sulfur-based fungicide', 'Reduce humidity', 'Ensure proper spacing'],
          description: 'White powdery coating on leaves and stems, thrives in humid conditions.'
        },
        {
          name: 'Bacterial Spot',
          confidence: 0.82,
          severity: 'severe',
          treatments: ['Apply copper bactericide', 'Remove infected plants', 'Improve drainage'],
          description: 'Dark spots with yellow halos on leaves, spreads rapidly in wet conditions.'
        }
      ];

      const randomDisease = mockDiseases[Math.floor(Math.random() * mockDiseases.length)];
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Save to database
      const { error } = await supabase
        .from('disease_detections')
        .insert({
          user_id: user.id,
          crop_name: 'Unknown Crop', // In real app, would detect crop type too
          detected_disease: randomDisease.name,
          confidence_score: randomDisease.confidence,
          treatment_recommendations: randomDisease.treatments,
          severity: randomDisease.severity
        });

      if (error) throw error;

      setScanResult(randomDisease);
      fetchRecentScans(user.id);
      
      toast({
        title: "Scan Complete!",
        description: `Disease detected with ${Math.round(randomDisease.confidence * 100)}% confidence.`,
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setScanning(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'mild': return 'text-success';
      case 'moderate': return 'text-cta';
      case 'severe': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getSeverityBg = (severity: string) => {
    switch (severity) {
      case 'mild': return 'bg-success/10';
      case 'moderate': return 'bg-cta/10';
      case 'severe': return 'bg-destructive/10';
      default: return 'bg-muted/10';
    }
  };

  return (
    <div className="min-h-screen earth-gradient">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            AI Disease Scanner 🔍
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Upload a photo of your crop leaves to instantly detect diseases and get treatment recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="earth-card p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Upload Plant Image</h2>
            
            <div className="space-y-6">
              {/* Image Upload Area */}
              <div 
                className="border-2 border-dashed border-earth rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
                onClick={() => fileInputRef.current?.click()}
              >
                {imagePreview ? (
                  <div className="space-y-4">
                    <img 
                      src={imagePreview} 
                      alt="Selected plant" 
                      className="max-w-full max-h-64 mx-auto rounded-lg object-cover"
                    />
                    <p className="text-sm text-muted-foreground">Click to change image</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-6xl">📷</div>
                    <div>
                      <p className="text-lg font-medium text-foreground">Click to upload image</p>
                      <p className="text-sm text-muted-foreground">Or drag and drop your plant photo here</p>
                    </div>
                  </div>
                )}
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="hidden"
              />

              {/* Scan Button */}
              <Button
                onClick={scanImage}
                disabled={!selectedImage || scanning || !user}
                className="w-full bg-cta hover:bg-cta/90"
                size="lg"
              >
                {scanning ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Analyzing Image...</span>
                  </div>
                ) : (
                  'Scan for Diseases'
                )}
              </Button>

              {!user && (
                <p className="text-center text-muted-foreground">
                  Please <a href="/auth" className="text-primary hover:underline">sign in</a> to scan images
                </p>
              )}

              {/* Tips */}
              <div className="bg-card-soft p-4 rounded-lg">
                <h4 className="font-medium text-foreground mb-2">📸 Photography Tips</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Take photos in good lighting</li>
                  <li>• Focus on affected leaves or areas</li>
                  <li>• Avoid blurry or distant shots</li>
                  <li>• Include multiple leaves if possible</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Results Section */}
          <div className="space-y-6">
            {scanResult && (
              <Card className="earth-card p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Scan Results</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{scanResult.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{scanResult.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        {Math.round(scanResult.confidence * 100)}%
                      </div>
                      <div className="text-sm text-muted-foreground">Confidence</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-foreground">Severity:</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityBg(scanResult.severity)} ${getSeverityColor(scanResult.severity)}`}>
                      {scanResult.severity.charAt(0).toUpperCase() + scanResult.severity.slice(1)}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-3">🩺 Treatment Recommendations</h4>
                    <div className="space-y-2">
                      {scanResult.treatments.map((treatment: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-card-soft rounded-lg">
                          <span className="text-success font-bold">{index + 1}.</span>
                          <span className="text-sm text-foreground">{treatment}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button className="flex-1 bg-primary" size="sm">
                      Save to Records
                    </Button>
                    <Button variant="outline" className="flex-1" size="sm">
                      Consult Expert
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            {/* Recent Scans */}
            <Card className="earth-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Recent Scans</h2>
              
              {recentScans.length > 0 ? (
                <div className="space-y-4">
                  {recentScans.map((scan, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-card-soft rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">🔍</div>
                        <div>
                          <h4 className="font-medium text-foreground">{scan.detected_disease}</h4>
                          <p className="text-sm text-muted-foreground">
                            {new Date(scan.created_at).toLocaleDateString()} • 
                            {Math.round(scan.confidence_score * 100)}% confidence
                          </p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityBg(scan.severity)} ${getSeverityColor(scan.severity)}`}>
                        {scan.severity}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">🔍</div>
                  <p className="text-muted-foreground">No scans yet. Upload your first plant image above!</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseScanner;