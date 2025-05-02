export interface QuestionOption {
  id: string;
  text: string;
  waterImpact: number; // 1-10 scale, 10 being the highest water usage
}

export interface Question {
  id: string;
  text: string;
  options: QuestionOption[];
}

export interface Questionnaire {
  id: string;
  title: string;
  questions: Question[];
}

export interface SurveyResult {
  questionnaireId: string;
  answers: {
    questionId: string;
    selectedOptionId: string;
    waterImpact: number;
  }[];
  totalWaterImpact: number;
  date: Date;
}