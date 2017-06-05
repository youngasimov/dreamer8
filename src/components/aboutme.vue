<template>
  <div>
    <h2 class="h4 my-5 experience-title" id="experiences">#Experience</h2>
    <experience-entry title="Front End Developer" company="I-Sepp" initDate="Feb 2016" endDate="Jun 2016"
                      :tags="['AngularJS', 'Bootstrap','Symphony','MySQL']" direction="right"></experience-entry>
    <experience-entry title="Software Engineer" company="Secretary Ministry" initDate="Apr 2015" endDate="Aug 2015"
                      :tags="['AngularJS', 'Bootstrap','Laravel','MySQL']" direction="left"></experience-entry>
    <experience-entry title="Software Engineer" company="ENNEA" initDate="Apr 2014" endDate="Dec 2014"
                      :tags="['AngularJS', 'Bootstrap','Reasteasy','Hibernate','PostgreSQL']"
                      direction="right"></experience-entry>
    <experience-entry title="Part time Professor" company="Adolfo Ibañez University" initDate="Apr 2014"
                      endDate="Jun 2014" :tags="['Mobile', 'PhoneGap']" direction="left"></experience-entry>
    <experience-entry title="Software Engineer" company="Federico Santa María University" initDate="Jul 2012"
                      endDate="Dec 2013"
                      :tags="['AngularJS','GWT', 'Bootstrap','Reasteasy','Hibernate','PostgreSQL']"
                      direction="right"></experience-entry>
    <h2 class="h4 my-5 education-title" id="education">#Education</h2>
    <education-entry title="MSc in Cyber Security" company="Tallinn University Of Technology" initDate="2015"
                     endDate="2017" :tags="['Cyber security', 'Networking']" direction="left"></education-entry>
    <education-entry title="BSc in Science of Telematic Engineering" company="Federico Santa María University"
                     initDate="2006"
                     endDate="2012"
                     :tags="['Programming teacher assistant','Digital Systems teacher assistant', 'Mobile and Web development teacher assistant']"
                     direction="right"></education-entry>
  </div>
</template>

<script>
  import ExperienceEntry from './ExperienceEntry';
  import EducationEntry from './EducationEntry';

  export default {
    components: { ExperienceEntry, EducationEntry },
    name: 'aboutme',
  };
</script>

<style lang='scss' scoped>
  @import '../assets/main';

  .experience-title {
    color: $orange;
  }

  .education-title {
    color: $purple;
  }

</style>
