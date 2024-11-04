
const Discuss = () => {
  return (
    <article className=" overflow-auto max-h-[500px] lg:h-full p-14 md:p-20 text-xl [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
  ">
      <p className="mb-6 md:w-[90%]">
      بتقييم نماذج التصنيف الثلاثة وجدنا أن نموذج
        <strong className="font-semibold text-gray-900 dark:text-white"> الانحدار اللوجيستي </strong> 
        حقق أعلى <span style={{fontWeight:'bold' , color:'green'}} > Accuracy </span>
        بلغت 0.85 ، 
        <span>
          يليه نموذج <strong className="font-semibold text-gray-900 dark:text-white">  شجرة القرار </strong>  بدقة 0.8 .  
        </span>
        <span>
          كان لنموذج
          <strong className="font-semibold text-gray-900 dark:text-white">   Navie Bayes </strong>
          دقة أقل قليلا تبلغ 0.78 .
        </span>
      </p>
      
      <p className="mb-6 md:w-[90%]">
      <p>عند النظر في <strong style={{color:'green'}}>Precision</strong> التي تقيس قدرة النموذج على تصنيف الحاالات الايجابية بشكل صحيح ، أظهر نموذج <strong>الانحدار اللوجستي</strong> أعلى <strong>Precision</strong> تبلغ .0.87 . حقق نموذج <strong>شجرة</strong> <strong>القرار Precision</strong> قدرها ،0.80 بينما حقق نموذج <strong>Bayes Naive</strong> قدرها 0.75.</p>
      </p>

      <p className="mb-6 md:w-[90%]">
      <p>فيما يتعلق <span style={{color:'green' , fontWeight:'bold'}}>بالاستذكار</span> ، الذي يقيس قدرة النموذج على تحديد جميع الحاالت الايجابية ، كان أداء نموذج <strong>شجرة القرار</strong> هو الأفضل مع استدعاء قدره .0.85 كان نموذج <strong>الانحدار اللوجستي</strong> لديه استدعاء قدره ،0.82 وكان نموذج <strong>Bayes Naive</strong> لديه استدعاء قدره 0.8 .</p>
      </p>

      <p className="mb-6 md:w-[90%]">
      <p>توفر درجة <strong style={{color:'green'}}>1F</strong> ، وهي وسيلة توافقية للدقة والاستذكار، مقيا ًسا متوازنًا للتقييم . حقق نموذج <strong>الانحدار اللوجستي</strong> أعلى درجة 1F وهي ،0.84 يليه نموذج <strong>شجرة القرار</strong> بدرجة 1F وهي .0.82 حصل نموذج <strong>Bayes Naive</strong> على أقل درجة في الفورموال 1 وهي 0.77 .</p>      </p>

    </article>
  )
}

export default Discuss
