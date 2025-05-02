import { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { Questionnaire, Question, QuestionOption } from '@/types/survey';
import { QuestionnaireCompleted } from './QuestionnaireCompleted';

interface QuestionnairePageProps {
  questionnaire: Questionnaire;
  onComplete: () => void;
}

export function QuestionnairePage({ questionnaire, onComplete }: QuestionnairePageProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [completed, setCompleted] = useState(false);

  const currentQuestion = questionnaire.questions[currentQuestionIndex];
  const totalQuestions = questionnaire.questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  
  const handleSelectOption = (questionId: string, optionId: string) => {
    setAnswers({
      ...answers,
      [questionId]: optionId
    });
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate results
      setCompleted(true);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  if (completed) {
    return (
      <QuestionnaireCompleted 
        questionnaire={questionnaire} 
        answers={answers}
        onComplete={onComplete}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Pressable onPress={handlePrevious} disabled={currentQuestionIndex === 0}>
          <ChevronLeft 
            size={24} 
            color={currentQuestionIndex === 0 ? '#CBD5E1' : '#64748B'} 
          />
        </Pressable>
        
        <Text style={styles.headerTitle}>{questionnaire.title}</Text>
        
        <Pressable onPress={() => onComplete()}>
          <Text style={styles.cancelText}>İptal</Text>
        </Pressable>
      </View>
      
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { width: `${progress}%` }
            ]} 
          />
        </View>
        <Text style={styles.progressText}>
          {currentQuestionIndex + 1}/{totalQuestions}
        </Text>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{currentQuestion.text}</Text>
          
          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option) => (
              <OptionButton 
                key={option.id}
                option={option}
                isSelected={answers[currentQuestion.id] === option.id}
                onSelect={() => handleSelectOption(currentQuestion.id, option.id)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      
      <View style={styles.buttonsContainer}>
        <Pressable 
          style={[
            styles.nextButton,
            !answers[currentQuestion.id] && styles.nextButtonDisabled
          ]}
          onPress={handleNext}
          disabled={!answers[currentQuestion.id]}
        >
          <Text style={styles.nextButtonText}>
            {currentQuestionIndex < totalQuestions - 1 ? 'İleri' : 'Tamamla'}
          </Text>
          <ChevronRight size={20} color="white" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

interface OptionButtonProps {
  option: QuestionOption;
  isSelected: boolean;
  onSelect: () => void;
}

function OptionButton({ option, isSelected, onSelect }: OptionButtonProps) {
  return (
    <Pressable 
      style={[
        styles.optionButton,
        isSelected && styles.optionButtonSelected
      ]}
      onPress={onSelect}
    >
      <View 
        style={[
          styles.optionButtonCheckmark,
          isSelected && styles.optionButtonCheckmarkSelected
        ]}
      >
        {isSelected && <View style={styles.optionButtonCheckmarkInner} />}
      </View>
      <Text 
        style={[
          styles.optionButtonText,
          isSelected && styles.optionButtonTextSelected
        ]}
      >
        {option.text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9', // Slate-100
  },
  headerTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#0F172A', // Slate-900
  },
  cancelText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#64748B', // Slate-500
  },
  progressContainer: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#F1F5F9', // Slate-100
    borderRadius: 4,
    marginRight: 16,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#0891B2', // Cyan-600
    borderRadius: 4,
  },
  progressText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#64748B', // Slate-500
  },
  content: {
    flex: 1,
  },
  questionContainer: {
    padding: 16,
  },
  questionText: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#0F172A', // Slate-900
    marginBottom: 24,
    lineHeight: 28,
  },
  optionsContainer: {
    marginTop: 8,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC', // Slate-50
    borderWidth: 1,
    borderColor: '#E2E8F0', // Slate-200
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  optionButtonSelected: {
    backgroundColor: '#CFFAFE', // Cyan-100
    borderColor: '#0891B2', // Cyan-600
  },
  optionButtonCheckmark: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#CBD5E1', // Slate-300
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionButtonCheckmarkSelected: {
    borderColor: '#0891B2', // Cyan-600
  },
  optionButtonCheckmarkInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#0891B2', // Cyan-600
  },
  optionButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#475569', // Slate-600
    flex: 1,
  },
  optionButtonTextSelected: {
    color: '#0F172A', // Slate-900
  },
  buttonsContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9', // Slate-100
  },
  nextButton: {
    backgroundColor: '#0891B2', // Cyan-600
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonDisabled: {
    backgroundColor: '#94A3B8', // Slate-400
    opacity: 0.7,
  },
  nextButtonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: 'white',
    marginRight: 4,
  },
});