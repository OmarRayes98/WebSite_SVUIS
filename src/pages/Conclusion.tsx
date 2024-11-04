const Conclusion = () => {
  return (
    <article className=" overflow-auto max-h-[550px] lg:h-full p-14 md:p-20 text-xl [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
  ">

<p className="mb-6 md:w-[80%] ">
<p><strong style={{color:'green'}}>استنادا إلى مقاييس التقييم  و الأداء العام</strong> ، يمكننا أن نستنتج أن نموذج <strong>الانحدار اللوجستي</strong>  تفوق في الاداء على نموذج <strong>شجرة القرار و Bayes Naive</strong> في تصنيف المركبات. لقد حققت أعلى مستويات الصحة والدقة الاستذكار ودرجة 1F بين النماذج الثلاثة  .</p>
</p>

<p className="mb-6 md:w-[80%]">
<p>يمكن أن يعزى الاداء المتفوق لنموذج <strong>الانحدار اللوجستي</strong> إلى قدرته على التقاط العلاقات بين ميزات الادخال والمتغير المستهدف بشكل فعال. بالاضافة إلى ذلك، يعد <strong>الانحداراللوجستي</strong> خوارزمية تصنيف راسخة ومتعددة الاستخدامات يمكنها التعامل مع <strong>العلاقات الخطية وغير الخطية في البيانات</strong> .</p>
</p>

<p className="mb-6 md:w-[80%]">
<p>على الرغم من أن نموذج <strong>شجرة القرار</strong> كان أداؤه جيدًا من حيث الاستذكار،إالا أنه أظهر دقة وإحكا ًما أقل قليلا مقارنة <strong>بالانحداراللوجستي</strong> . تميل <strong>شجرة القرار</strong> إلى زيادة ميلها إلى الافراط في استيعاب بيانات التدريب، مما قد يؤدي إلى تقليل التعميم على البيانات غير المرئية.</p>
</p>

<p className="mb-6 md:w-[80%]">
<p>نموذج <strong>Bayes Naive</strong> ، على الرغم من بساطته وافتراضه الاستقلال بين الميزات، <strong>حقق أدنى مقاييس</strong> <strong>الاداء</strong> بين النماذج الثلاثة . قد يكون <strong>Bayes Naive</strong> مناسبًا لمجموعات البيانات ذاتالعلاقات المعقدة أو التبعيات بين الميزات .</p>
</p>

    </article>
  )
}

export default Conclusion
