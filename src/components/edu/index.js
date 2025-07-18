import JModal from './JModal'
import JFormContainer from './JFormContainer.vue'
import JPopup from './JPopup.vue'
import JMarkdownEditor from './JMarkdownEditor'
import JCodeEditor from './JCodeEditor.vue'
import JEditor from './JEditor.vue'
import JEditableTable from './JEditableTable.vue'
import JAreaLinkage from './JAreaLinkage.vue'
import JSuperQuery from './JSuperQuery.vue'
import JUpload from './JUpload.vue'
import JTreeSelect from './JTreeSelect.vue'
import JCategorySelect from './JCategorySelect.vue'
import JImageUpload from './JImageUpload.vue'
import JImportModal from './JImportModal.vue'
import JTreeDict from './JTreeDict.vue'
import JCheckbox from './JCheckbox.vue'
import JCron from './JCron.vue'
import JDate from './JDate.vue'
import JEllipsis from './JEllipsis.vue'
import JInput from './JInput.vue'
import JPopupOnlReport from './modal/JPopupOnlReport.vue'
import JFilePop from './minipop/JFilePop.vue'
import JInputPop from './minipop/JInputPop.vue'
import JSelectMultiple from './JSelectMultiple.vue'
import JSlider from './JSlider.vue'
import JSwitch from './JSwitch.vue'
import JTime from './JTime.vue'
import JTreeTable from './JTreeTable.vue'
import EduButton from './button/EduButton'
import EduButtonDelete from './button/EduButtonDelete'
import EduCaozuoButton from './button/EduCaozuoButton'
import EduDeleteButton from './button/EduDeleteButton'
import EduBatchDeleteButton from './button/EduBatchDeleteButton'
import EduLabelButton from './button/EduLabelButton'
import EduLabel from './button/EduLabel'
export default {
  install(Vue) {
    Vue.component('JMarkdownEditor', JMarkdownEditor)
    Vue.component(JModal.name, JModal)
    Vue.component('JPopupOnlReport', JPopupOnlReport)
    Vue.component('JFilePop', JFilePop)
    Vue.component('JInputPop', JInputPop)
    Vue.component('JAreaLinkage', JAreaLinkage)
    Vue.component('JCategorySelect', JCategorySelect)
    Vue.component('JCheckbox', JCheckbox)
    Vue.component('JCodeEditor', JCodeEditor)
    Vue.component('JCron', JCron)
    Vue.component('JDate', JDate)
    Vue.component('JEditableTable', JEditableTable)
    Vue.component('JEditor', JEditor)
    Vue.component('JEllipsis', JEllipsis)
    Vue.component('JFormContainer', JFormContainer)
    Vue.component('JImageUpload', JImageUpload)
    Vue.component('JImportModal', JImportModal)
    Vue.component('JInput', JInput)
    Vue.component('JPopup', JPopup)
    Vue.component('JSelectMultiple', JSelectMultiple)
    Vue.component('JSlider', JSlider)
    Vue.component('JSuperQuery', JSuperQuery)
    Vue.component('JSwitch', JSwitch)
    Vue.component('JTime', JTime)
    Vue.component('JTreeDict', JTreeDict)
    Vue.component('JTreeSelect', JTreeSelect)
    Vue.component('JTreeTable', JTreeTable)
    Vue.component('JUpload', JUpload)
	Vue.component("EduButton",EduButton);
	Vue.component("EduDeleteButton",EduDeleteButton);
	Vue.component("EduLabelButton",EduLabelButton);
	Vue.component("EduCaozuoButton",EduCaozuoButton);
	Vue.component("EduBatchDeleteButton",EduBatchDeleteButton);
	Vue.component("EduButtonDelete",EduButtonDelete);
	Vue.component("EduLabel",EduLabel);
  }
}