import { Questionnaire } from '@/types/survey';

export const bathSurvey: Questionnaire = {
  id: 'bath',
  title: 'Banyo Alışkanlıkları',
  questions: [
    {
      id: 'bath-1',
      text: 'Dişlerinizi fırçalarken musluk suyu nasıl kullanıyorsunuz?',
      options: [
        { id: 'b1-a', text: 'Sürekli açık tutuyorum', waterImpact: 10 },
        { id: 'b1-b', text: 'Sadece ihtiyaç duyduğumda açıyorum', waterImpact: 2 },
        { id: 'b1-c', text: 'Bir bardak su kullanıyorum', waterImpact: 1 },
      ],
    },
    {
      id: 'bath-2',
      text: 'Günde kaç dakika duş alıyorsunuz?',
      options: [
        { id: 'b2-a', text: '15 dakikadan fazla', waterImpact: 10 },
        { id: 'b2-b', text: '10-15 dakika arası', waterImpact: 7 },
        { id: 'b2-c', text: '5-10 dakika arası', waterImpact: 4 },
        { id: 'b2-d', text: '5 dakikadan az', waterImpact: 1 },
      ],
    },
    {
      id: 'bath-3',
      text: 'Duş alırken su akışını nasıl ayarlıyorsunuz?',
      options: [
        { id: 'b3-a', text: 'Güçlü akış', waterImpact: 8 },
        { id: 'b3-b', text: 'Orta düzeyde akış', waterImpact: 5 },
        { id: 'b3-c', text: 'Düşük akış', waterImpact: 2 },
      ],
    },
    {
      id: 'bath-4',
      text: 'Ne sıklıkla banyo yapıyorsunuz (küvette)?',
      options: [
        { id: 'b4-a', text: 'Her gün', waterImpact: 10 },
        { id: 'b4-b', text: 'Haftada birkaç kez', waterImpact: 6 },
        { id: 'b4-c', text: 'Haftada bir kez veya daha az', waterImpact: 3 },
        { id: 'b4-d', text: 'Hiç yapmıyorum, sadece duş alıyorum', waterImpact: 1 },
      ],
    },
    {
      id: 'bath-5',
      text: 'Tıraş olurken akan suyun durumu nedir?',
      options: [
        { id: 'b5-a', text: 'Sürekli açık', waterImpact: 8 },
        { id: 'b5-b', text: 'Sadece bıçağı yıkarken açık', waterImpact: 4 },
        { id: 'b5-c', text: 'Bir kap su kullanıyorum', waterImpact: 1 },
      ],
    },
  ],
};