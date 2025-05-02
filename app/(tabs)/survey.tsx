import { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Check, ChevronRight } from 'lucide-react-native';
import { QuestionnairePage } from '@/components/survey/QuestionnairePage';
import { QuestionnaireCompleted } from '@/components/survey/QuestionnaireCompleted';
import { Questionnaire } from '@/types/survey';
import { bathSurvey } from '@/data/surveys';

export default function SurveyScreen() {
  const [activeQuestionnaire, setActiveQuestionnaire] = useState<Questionnaire | null>(null);
  const [completedSurveys, setCompletedSurveys] = useState<string[]>([]);

  const handleStartSurvey = (survey: Questionnaire) => {
    setActiveQuestionnaire(survey);
  };

  const handleCompleteSurvey = (surveyId: string) => {
    setCompletedSurveys([...completedSurveys, surveyId]);
    setActiveQuestionnaire(null);
  };

  if (activeQuestionnaire) {
    return (
      <QuestionnairePage 
        questionnaire={activeQuestionnaire} 
        onComplete={() => handleCompleteSurvey(activeQuestionnaire.id)}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Su Tasarrufu Anketleri</Text>
        <Text style={styles.headerSubtitle}>
          Alışkanlıklarınızı değerlendirin ve su tasarrufu potansiyelinizi öğrenin
        </Text>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.surveysContainer}>
          {/* Bath Survey */}
          <SurveyCard
            title="Banyo Alışkanlıkları"
            description="Duş ve temizlik rutininizi değerlendirin"
            questionCount={5}
            timeEstimate={2}
            isCompleted={completedSurveys.includes('bath')}
            onPress={() => handleStartSurvey(bathSurvey)}
          />
          
          {/* Kitchen Survey */}
          <SurveyCard
            title="Mutfak Alışkanlıkları"
            description="Yemek pişirme ve bulaşık alışkanlıklarınız"
            questionCount={4}
            timeEstimate={2}
            isCompleted={completedSurveys.includes('kitchen')}
            onPress={() => handleStartSurvey({
              id: 'kitchen',
              title: 'Mutfak Alışkanlıkları',
              questions: [
                {
                  id: 'kitchen-1',
                  text: 'Bulaşıkları elde yıkarken musluğu sürekli açık mı tutuyorsunuz?',
                  options: [
                    { id: 'k1-a', text: 'Evet, sürekli açık kalıyor', waterImpact: 10 },
                    { id: 'k1-b', text: 'Hayır, sadece durulama sırasında açıyorum', waterImpact: 2 },
                    { id: 'k1-c', text: 'Bir kaba su doldurup kullanıyorum', waterImpact: 1 },
                  ],
                },
                {
                  id: 'kitchen-2',
                  text: 'Bulaşık makinenizi genellikle hangi doluluk seviyesinde çalıştırıyorsunuz?',
                  options: [
                    { id: 'k2-a', text: 'Tamamen dolu', waterImpact: 1 },
                    { id: 'k2-b', text: 'Yarı dolu', waterImpact: 5 },
                    { id: 'k2-c', text: 'Az sayıda bulaşık olsa bile', waterImpact: 10 },
                  ],
                },
                {
                  id: 'kitchen-3',
                  text: 'Sebze ve meyveleri nasıl yıkıyorsunuz?',
                  options: [
                    { id: 'k3-a', text: 'Akan suyun altında', waterImpact: 7 },
                    { id: 'k3-b', text: 'Bir kaba su doldurarak', waterImpact: 2 },
                    { id: 'k3-c', text: 'Özel bir yıkama solüsyonu kullanarak', waterImpact: 4 },
                  ],
                },
                {
                  id: 'kitchen-4',
                  text: 'Su ısıtıcısını ne kadar su ile dolduruyorsunuz?',
                  options: [
                    { id: 'k4-a', text: 'Her zaman tamamen dolduruyorum', waterImpact: 5 },
                    { id: 'k4-b', text: 'Sadece ihtiyacım olan miktarda', waterImpact: 1 },
                    { id: 'k4-c', text: 'Genellikle yarıya kadar', waterImpact: 3 },
                  ],
                },
              ],
            })}
          />
          
          {/* Outdoor Survey */}
          <SurveyCard
            title="Bahçe ve Dış Mekan"
            description="Bahçe bakımı ve dış mekan su kullanımı"
            questionCount={3}
            timeEstimate={1}
            isCompleted={completedSurveys.includes('outdoor')}
            onPress={() => handleStartSurvey({
              id: 'outdoor',
              title: 'Bahçe ve Dış Mekan',
              questions: [
                {
                  id: 'out-1',
                  text: 'Bahçe sulama sıklığınız nedir?',
                  options: [
                    { id: 'o1-a', text: 'Her gün', waterImpact: 10 },
                    { id: 'o1-b', text: 'Haftada 2-3 kez', waterImpact: 5 },
                    { id: 'o1-c', text: 'Sadece gerektiğinde', waterImpact: 2 },
                  ],
                },
                {
                  id: 'out-2',
                  text: 'Bahçe sulamak için hangi yöntemi kullanıyorsunuz?',
                  options: [
                    { id: 'o2-a', text: 'Hortum veya sulama kabı', waterImpact: 8 },
                    { id: 'o2-b', text: 'Damla sulama sistemi', waterImpact: 3 },
                    { id: 'o2-c', text: 'Yağmur suyu toplama sistemi', waterImpact: 1 },
                  ],
                },
                {
                  id: 'out-3',
                  text: 'Arabanızı ne sıklıkla yıkıyorsunuz?',
                  options: [
                    { id: 'o3-a', text: 'Haftada bir veya daha sık', waterImpact: 8 },
                    { id: 'o3-b', text: 'Ayda bir veya iki kez', waterImpact: 4 },
                    { id: 'o3-c', text: 'Sadece çok kirlendiğinde', waterImpact: 2 },
                  ],
                },
              ],
            })}
          />
          
          {/* Laundry Survey */}
          <SurveyCard
            title="Çamaşır Yıkama"
            description="Çamaşır yıkama alışkanlıklarınız"
            questionCount={3}
            timeEstimate={1}
            isCompleted={completedSurveys.includes('laundry')}
            onPress={() => handleStartSurvey({
              id: 'laundry',
              title: 'Çamaşır Yıkama',
              questions: [
                {
                  id: 'laun-1',
                  text: 'Çamaşır makinenizi genellikle hangi doluluk seviyesinde çalıştırıyorsunuz?',
                  options: [
                    { id: 'l1-a', text: 'Tamamen dolu', waterImpact: 1 },
                    { id: 'l1-b', text: 'Yarı dolu', waterImpact: 5 },
                    { id: 'l1-c', text: 'Az sayıda kıyafet olsa bile', waterImpact: 10 },
                  ],
                },
                {
                  id: 'laun-2',
                  text: 'Haftada kaç kez çamaşır yıkıyorsunuz?',
                  options: [
                    { id: 'l2-a', text: '4 veya daha fazla', waterImpact: 8 },
                    { id: 'l2-b', text: '2-3 kez', waterImpact: 4 },
                    { id: 'l2-c', text: '1 kez veya daha az', waterImpact: 2 },
                  ],
                },
                {
                  id: 'laun-3',
                  text: 'Genellikle hangi yıkama sıcaklığını kullanıyorsunuz?',
                  options: [
                    { id: 'l3-a', text: 'Sıcak su (60-90°C)', waterImpact: 6 },
                    { id: 'l3-b', text: 'Ilık su (30-40°C)', waterImpact: 3 },
                    { id: 'l3-c', text: 'Soğuk su', waterImpact: 1 },
                  ],
                },
              ],
            })}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

interface SurveyCardProps {
  title: string;
  description: string;
  questionCount: number;
  timeEstimate: number;
  isCompleted: boolean;
  onPress: () => void;
}

function SurveyCard({ 
  title, 
  description, 
  questionCount, 
  timeEstimate, 
  isCompleted, 
  onPress 
}: SurveyCardProps) {
  return (
    <Pressable style={styles.surveyCard} onPress={onPress}>
      <View style={styles.surveyCardContent}>
        <View>
          <Text style={styles.surveyCardTitle}>{title}</Text>
          <Text style={styles.surveyCardDescription}>{description}</Text>
          <Text style={styles.surveyCardMeta}>
            {questionCount} soru • {timeEstimate} dakika
          </Text>
        </View>
        
        <View style={styles.rightContainer}>
          {isCompleted ? (
            <View style={styles.completedBadge}>
              <Check size={16} color="#16A34A" />
            </View>
          ) : (
            <ChevronRight size={20} color="#64748B" />
          )}
        </View>
      </View>
    </Pressable>
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
  surveysContainer: {
    padding: 16,
  },
  surveyCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#94A3B8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  surveyCardContent: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  surveyCardTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#0F172A', // Slate-900
    marginBottom: 4,
  },
  surveyCardDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#475569', // Slate-600
    marginBottom: 8,
  },
  surveyCardMeta: {
    fontFamily: 'Inter-Medium',
    fontSize: 13,
    color: '#64748B', // Slate-500
  },
  rightContainer: {
    padding: 8,
  },
  completedBadge: {
    backgroundColor: '#DCFCE7', // Green-100
    borderRadius: 16,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});