<template>
    <div class="sub2-container">
        <img class="sub2-section-icon" src="../../images/section-icon.png" alt="섹션아이콘" />
        <div class="sub2-T1">메일 그룹 상세</div>
    </div>
    <div class="sub2-container2">
        <div class="sub2-section-header">
            <img class="dot" src="../../images/dot.png" alt="" />
            <div class="sub2-T3">그룹 내 검색</div>
        </div>
        <div class="sub2-sub-container">
            <div class="input-container">
                <CustomSelect
                :options="['1', '2', '3', '4']"
                :default="'1'"
                class="select"
                />
                <input id="search" type="text" placeholder="부서명/이메일/이름"/>
                <button class="search-btn">검색</button>
            </div>
        </div>
        <div class="search-result">
        </div>
        <button class="add-btn">메일그룹에 추가</button>
    </div>
    <div class="sub2-container3">
        <div class="sub2-section-header">
            <img class="dot" src="../../images/dot.png" alt="" />
            <div class="sub2-T3" style="display:flex"><div style="color:#8C1F47; marginRight:0.3vw">임원 접대성 경비 내역 취합</div> 업무에 대한 그룹 메일 현황</div>
        </div>
        <div class="sub2-T2">※ N/A(구분)는 RPA 엑셀다운로드 데이터에서 제외됩니다.</div>
        <table class="sub2-table">
            <colgroup>
                <col width="12%">
                <col width="12%">
                <col width="7%">
                <col width="13%">
                <col width="13%">
                <col width="7%">
                <col width="14%">
                <col width="12%">
                <col width="5%">
                <col width="5%">
            </colgroup>
            <thead>
                <tr>
                    <th>SUB ID</th>
                    <th>SUB 그룹</th>
                    <th>구분</th>
                    <th>회사명</th>
                    <th>부서명</th>
                    <th>이름</th>
                    <th>이메일</th>
                    <th>계정</th>
                    <th colspan="2">관리</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="list in listArray" :key="list.group">
                    <td>{{list.subId}}</td>
                    <td>{{list.subGroup}}</td>
                    <td>{{list.classify}}</td>
                    <td>{{list.compName}}</td>
                    <td>{{list.partName}}</td>
                    <td>{{list.name}}</td>
                    <td>{{list.email}}</td>
                    <td>{{list.account}}</td>
                    <td>
                        <button class="edit-btn" />
                    </td>
                    <td>
                        <button class="delete-btn"/>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="sub2-sub-container">
            <div class="input-container">
                <label>그룹 외 메일 추가</label>
                <input id="subId" type="text" placeholder="SUB ID"/>
                <input id="subGroup" type="text" placeholder="SUB 그룹"/>
                <CustomSelect
                :options="['1', '2', '3', '4']"
                :default="'1'"
                class="select2"
                />
                <input id="compName" type="text" placeholder="회사명"/>
                <input id="name" type="text" placeholder="이름"/>
                <input id="email" type="text" placeholder="이메일"/>
                <input id="account" type="text" placeholder="계정"/>
                <button class="add-btn2"/>
                <button class="search-btn2">목록으로</button>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderNav from '../../components/HeaderNav.vue'
    import CustomSelect from '../../components/CustomSelect.vue'

    export default {
        components: {
            'HeaderNav' : HeaderNav,
            'CustomSelect' : CustomSelect
        },
        data () {
            return {
                pageNum: 0,
                pageSize: 10,
                listArray: [
                    {subId:"", subGroup:"", classify:"취합", compName:"KIS정보통신", partName:"경영기획파트", name:"김윤종", email:"yjkim@kiavan.co.ke", account:""},
                    {subId:"", subGroup:"", classify:"취합", compName:"KIS정보통신", partName:"경영기획파트", name:"김윤종", email:"yjkim@kiavan.co.ke", account:""},
                    {subId:"", subGroup:"", classify:"취합", compName:"KIS정보통신", partName:"경영기획파트", name:"김윤종", email:"yjkim@kiavan.co.ke", account:""},
                    {subId:"", subGroup:"", classify:"취합", compName:"KIS정보통신", partName:"경영기획파트", name:"김윤종", email:"yjkim@kiavan.co.ke", account:""},
                    {subId:"", subGroup:"", classify:"취합", compName:"KIS정보통신", partName:"경영기획파트", name:"김윤종", email:"yjkim@kiavan.co.ke", account:""},
                    {subId:"", subGroup:"", classify:"취합", compName:"KIS정보통신", partName:"경영기획파트", name:"김윤종", email:"yjkim@kiavan.co.ke", account:""},
                    {subId:"", subGroup:"", classify:"취합", compName:"KIS정보통신", partName:"경영기획파트", name:"김윤종", email:"yjkim@kiavan.co.ke", account:""},
                    {subId:"", subGroup:"", classify:"취합", compName:"KIS정보통신", partName:"경영기획파트", name:"김윤종", email:"yjkim@kiavan.co.ke", account:""},
                    {subId:"", subGroup:"", classify:"취합", compName:"KIS정보통신", partName:"경영기획파트", name:"김윤종", email:"yjkim@kiavan.co.ke", account:""},
                    {subId:"", subGroup:"", classify:"취합", compName:"KIS정보통신", partName:"경영기획파트", name:"김윤종", email:"yjkim@kiavan.co.ke", account:""},
                ],
            }
        },
        props: {
        },
        methods: {
        },
        computed: {
        }
    }
</script>

<style src="../../css/RPA/sub_11.css" scoped />