import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bookmark, BookmarkCheck, Droplet, ExternalLink } from 'lucide-react-native';
import { useState } from 'react';
import { waterTips } from '@/data/waterTips';

export default function TipsScreen() {
  const [savedTips, setSavedTips] = useState<string[]>([]);
  
  const toggleSaveTip = (tipId: string) => {
    if (savedTips.includes(tipId)) {
      setSavedTips(savedTips.filter(id => id !== tipId));
    } else {
      setSavedTips([...savedTips, tipId]);
    }
  };
  
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Su Tasarrufu İpuçları</Text>
        <Text style={styles.headerSubtitle}>
          Günlük yaşamınızda uygulayabileceğiniz su tasarrufu yöntemleri
        </Text>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.tipCategoriesContainer}>
          <Pressable style={[styles.tipCategoryButton, styles.tipCategoryButtonActive]}>
            <Text style={styles.tipCategoryButtonTextActive}>Tüm İpuçları</Text>
          </Pressable>
          
          <Pressable style={styles.tipCategoryButton}>
            <Text style={styles.tipCategoryButtonText}>Banyo</Text>
          </Pressable>
          
          <Pressable style={styles.tipCategoryButton}>
            <Text style={styles.tipCategoryButtonText}>Mutfak</Text>
          </Pressable>
          
          <Pressable style={styles.tipCategoryButton}>
            <Text style={styles.tipCategoryButtonText}>Bahçe</Text>
          </Pressable>
        </View>
        
        <View style={styles.tipsContainer}>
          {waterTips.map((tip) => (
            <View key={tip.id} style={styles.tipCard}>
              {tip.imageUrl && (
                <Image 
                  source={{ uri: tip.imageUrl }} 
                  style={styles.tipImage}
                  resizeMode="cover"
                />
              )}
              
              <View style={styles.tipCardContent}>
                <View style={styles.tipCardHeader}>
                  <View style={styles.tipCategoryBadge}>
                    <Droplet size={12} color="#0E7490" />
                    <Text style={styles.tipCategoryText}>{tip.category}</Text>
                  </View>
                  
                  <Pressable 
                    onPress={() => toggleSaveTip(tip.id)}
                    style={styles.saveButton}
                  >
                    {savedTips.includes(tip.id) ? (
                      <BookmarkCheck size={20} color="#0891B2" />
                    ) : (
                      <Bookmark size={20} color="#64748B" />
                    )}
                  </Pressable>
                </View>
                
                <Text style={styles.tipTitle}>{tip.title}</Text>
                <Text style={styles.tipDescription}>{tip.description}</Text>
                
                {tip.saving && (
                  <View style={styles.tipSavingContainer}>
                    <Text style={styles.tipSavingText}>
                      Potansiyel tasarruf: <Text style={styles.tipSavingValue}>{tip.saving}</Text>
                    </Text>
                  </View>
                )}
                
                {tip.externalUrl && (
                  <Pressable style={styles.learnMoreButton}>
                    <Text style={styles.learnMoreText}>Daha Fazla Bilgi</Text>
                    <ExternalLink size={16} color="#0891B2" />
                  </Pressable>
                )}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC', // Slate-50
  },
  header: {
    padding: 16,
    backgroundColor: '#ECFEFF', // Cyan-50
  },
  headerTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#0C4A6E', // Sky-900
    marginBottom: 8,
  },
  headerSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#0E7490', // Cyan-700
    lineHeight: 22,
  },
  content: {
    flex: 1,
  },
  tipCategoriesContainer: {
    flexDirection: 'row',
    padding: 16,
    paddingBottom: 8,
  },
  tipCategoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#F1F5F9', // Slate-100
  },
  tipCategoryButtonActive: {
    backgroundColor: '#0891B2', // Cyan-600
  },
  tipCategoryButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#475569', // Slate-600
  },
  tipCategoryButtonTextActive: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: 'white',
  },
  tipsContainer: {
    padding: 16,
    paddingTop: 8,
  },
  tipCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#94A3B8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    overflow: 'hidden',
  },
  tipImage: {
    width: '100%',
    height: 160,
  },
  tipCardContent: {
    padding: 16,
  },
  tipCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  tipCategoryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CFFAFE', // Cyan-100
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
  },
  tipCategoryText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#0E7490', // Cyan-700
    marginLeft: 4,
  },
  saveButton: {
    padding: 4,
  },
  tipTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#0F172A', // Slate-900
    marginBottom: 8,
  },
  tipDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: '#475569', // Slate-600
    lineHeight: 22,
    marginBottom: 12,
  },
  tipSavingContainer: {
    backgroundColor: '#F0FDF4', // Green-50
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,
  },
  tipSavingText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#166534', // Green-800
  },
  tipSavingValue: {
    fontFamily: 'Inter-Bold',
  },
  learnMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  learnMoreText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#0891B2', // Cyan-600
    marginRight: 4,
  },
});