import { ElMessage } from 'element-plus'

export const useCopy = (text: string) => {
  let inputEl = document.createElement('input')
  inputEl.value = text
  document.body.appendChild(inputEl)
  inputEl.select()
  document.execCommand('Copy')
  ElMessage.success('复制成功!')
  document.body.removeChild(inputEl)
}
