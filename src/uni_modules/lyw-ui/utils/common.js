import { nextTick } from "vue"
let nttimer
export const lywNextTick = async () => {
	// #ifdef MP-WEIXIN
	return new Promise((resolve) => {
		wx.nextTick(() => {
			resolve()
		})
	})
	// #endif
	// #ifdef MP-ALIPAY
	return new Promise((resolve) => {
		clearTimeout(nttimer)
		nttimer = setTimeout(() => {
			resolve()
		}, 0)
	})
	// #endif
	// #ifdef APP-PLUS | H5
	await nextTick()
	// #endif
}

// 日期格式化
export function formatDate (datetime, format = 'yyyy-MM-dd') {
	const sysinfo = uni.getDeviceInfo()
	const {
		system
	} = sysinfo
	let dt = datetime || new Date()
	if (system.toLowerCase().indexOf('ios') != -1 && typeof dt === 'string') {
		dt = dt.replace(/-/g, '/')
	}
	const ndt = new Date(dt)
	const yyyy = ndt.getFullYear()
	let MM = ndt.getMonth() + 1
	let dd = ndt.getDate()
	let hh = ndt.getHours()
	let mm = ndt.getMinutes()
	let ss = ndt.getSeconds()
	const obj = {
		yyyy,
		MM,
		dd,
		hh,
		mm,
		ss
	}
	for (let key in obj) {
		if (obj[key] < 10) {
			obj[key] = `0${obj[key]}`
		}
		format = format.replace(key, obj[key])
	}
	return format
}