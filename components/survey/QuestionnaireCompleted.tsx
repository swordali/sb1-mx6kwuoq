import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Questionnaire } from '@/types/survey';
import { CircleCheck as CheckCircle, Droplet } from 'lucide-react-native';

interface QuestionnaireCompletedProps {
  questionnaire: Questionnaire;
  answers: Record<string, string>;
  onComplete: () => void;
}

export function QuestionnaireCompleted({ 
  questionnaire, 
  answers, 
  onComplete 
}: QuestionnaireCompletedProps) {
  // Calculate water impact score
  const questions = questionnaire.questions;
  let totalWaterImpact = 0;
  let maxPossibleImpact = 0;
  
  questions.forEach(question => {
    const selectedOptionId = answers[question.id];
    const selectedOption = question.options.find(option => option.id === selectedOptionId);
    
    if (selectedOption) {
      totalWaterImpact += selectedOption.waterImpact;
    }
    
    // Calculate max possible impact for context
    const maxImpactForQuestion = Math.max(...question.options.map(option => option.waterImpact));
    maxPossibleImpact += maxImpactForQuestion;
  });
  
  // Calculate a score from 0-100 (higher is better water conservation)
  // Invert the score since lower impact is better
  const waterConservationScore = Math.round(100 - ((totalWaterImpact / maxPossibleImpact) * 100));
  
  // Get personalized tips based on answers
  const getTips = () => {
    if (questionnaire.id === 'bath') {
      return [
        'Duş sürenizi 5 dakika veya altına indirin',
        'Diş fırçalarken musluğu kapatın',
        'Düşük akışlı duş başlığı kullanın'
      ];
    } else if (questionnaire.id === 'kitchen') {
      return [
        'Bulaşıkları elde yıkarken bir kaba su doldurun',
        'Sebze ve meyveleri akan suda değil, bir kapta yıkayın',
        'Bulaşık makinenizi tam dolduğunda çalıştırın'
      ];
    } else {
      return [
        'Alışkanlıklarınızı değiştirerek su tasarrufu yapabilirsiniz',
        'Düşük su tüketen ev aletleri tercih edin',
        'Su sızıntılarını hemen tamir edin'
      ];
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Anket Tamamlandı!</Text>
      </View>
      
      <View style={styles.content}>
        <View style={styles.successIconContainer}>
          <CheckCircle size={64} color="#0891B2" />
        </View>
        
        <Text style={styles.thankYouText}>
          Teşekkürler! Cevaplarınız kaydedildi.
        </Text>
        
        <View style={styles.scoreCard}>
          <View style={styles.scoreHeader}>
            <Droplet size={24} color="#0891B2" />
            <Text style={styles.scoreTitle}>Su Tasarrufu Puanınız</Text>
          </View>
          
          <View style={styles.scoreCircle}>
            <Text style={styles.scoreValue}>{waterConservationScore}</Text>
            <Text style={styles.scoreMaxValue}>/100</Text>
          </View>
          
          <Text style={styles.scoreDescription}>
            {waterConservationScore >= 80 
              ? 'Harika! Su tasarrufu konusunda önemli adımlar atıyorsunuz.' 
              : waterConservationScore >= 50 
                ? 'İyi! Daha fazla su tasarrufu yapabilirsiniz.' 
                : 'Su tasarrufu konusunda gelişim alanlarınız var.'}
          </Text>
        </View>
        
        <View style={styles.tipsContainer}>
          <Text style={styles.tipsTitle}>Kişisel Öneriler</Text>
          
          {getTips().map((tip, index) => (
            <View key={index} style={styles.tipItem}>
              <View style={styles.tipBullet} />
              <Text style={styles.tipText}>{tip}</Text>
            </View>
          ))}
        </View>
      </View>
      
      <View style={styles.buttonsContainer}>
        <Pressable 
          style={styles.continueButton}
          onPress={onComplete}
        >
          <Text style={styles.continueButtonText}>Devam Et</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    padding: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9', // Slate-100
  },
  headerTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#0F172A', // Slate-900
  },
  content: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  successIconContainer: {
    marginTop: 24,
    marginBottom: 16,
  },
  thankYouText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#475569', // Slate-600
    textAlign: 'center',
    marginBottom: 32,
  },
  scoreCard: {
    backgroundColor: '#F0F9FF', // Sky-50
    borderRadius: 16,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },
  scoreHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  scoreTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#0F172A', // Slate-900
    marginLeft: 8,
  },
  scoreCircle: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#0E7490',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  scoreValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 36,
    color: '#0891B2', // Cyan-600
  },
  scoreMaxValue: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#0891B2', // Cyan-600
    marginTop: -8,
  },
  scoreDescription: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#0E7490', // Cyan-700
    textAlign: 'center',
  },
  tipsContainer: {
    width: '100%',
  },
  tipsTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#0F172A', // Slate-900
    marginBottom: 16,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  tipBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#0891B2', // Cyan-600
    marginTop: 6,
    marginRight: 12,
  },
  tipText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#475569', // Slate-600
    flex: 1,
    lineHeight: 22,
  },
  buttonsContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9', // Slate-100
  },
  continueButton: {
    backgroundColor: '#0891B2', // Cyan-600
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  continueButtonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: 'white',
  },
});