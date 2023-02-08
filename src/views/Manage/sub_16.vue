<template>
    <div class="sub2-container">
        <img class="sub2-section-icon" src="../../images/section-icon.png" alt="섹션아이콘" />
        <div class="sub2-T1">권한 변경 이력</div>
    </div>
    <div class="sub2-container3">
        <table class="sub2-table">
            <colgroup>
                <col width="12%">
                <col width="13%">
                <col width="9%">
                <col width="15%">
                <col width="25%">
                <col width="16%">
            </colgroup>
            <thead>
                <tr>
                    <th>관리자 회사명</th>
                    <th>관리자 사용자 계정</th>
                    <th>관리자 이름</th>
                    <th>권한 변경한 ID</th>
                    <th>내용</th>
                    <th>수정날짜</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="list in paginatedData" :key="list.group">
                    <td>{{list.compName}}</td>
                    <td>{{list.account}}</td>
                    <td>{{list.name}}</td>
                    <td>{{list.account2}}</td>
                    <td>{{list.content}}</td>
                    <td>{{list.date}}</td>
                </tr>
            </tbody>
        </table>
        <div class="table-btn-container">
            <button class="table-page-btn" :disabled="pageNum === 0" @click="firstPage">
                <vue-feather type="chevrons-left"/>
            </button>
            <button class="table-page-btn" :disabled="pageNum === 0" @click="prevPage">
                <vue-feather type="chevron-left"/>
            </button>
            <div class="page-numbers">
                <button class="page-number" :class="{ active: paging-1 === pageNum}" v-for="(paging, index) in pages" :key="index" @click="toPage(paging-1)">
                    {{paging}}
                </button>
            </div>
            <button class="table-page-btn" :disabled="pageNum >= pageCount - 1" @click="nextPage">
                <vue-feather type="chevron-right"/>
            </button>
            <button class="table-page-btn" :disabled="pageNum >= pageCount - 1"  @click="lastPage">
                <vue-feather type="chevrons-right"/>
            </button>
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
                    {compName:"NICE 홀딩스", account:"jimlee@nice.co.kr", name:"이종민", account2:"jimlee@nice.co.kr", content:"당사권한 -> 그룹IT권한 변경", date:"2022-11-30 14:00:39"},
                    {compName:"NICE 홀딩스", account:"jimlee@nice.co.kr", name:"이종민", account2:"jimlee@nice.co.kr", content:"당사권한 -> 그룹IT권한 변경", date:"2022-11-30 14:00:39"},
                    {compName:"NICE 홀딩스", account:"jimlee@nice.co.kr", name:"이종민", account2:"jimlee@nice.co.kr", content:"당사권한 -> 그룹IT권한 변경", date:"2022-11-30 14:00:39"},
                    {compName:"NICE 홀딩스", account:"jimlee@nice.co.kr", name:"이종민", account2:"jimlee@nice.co.kr", content:"당사권한 -> 그룹IT권한 변경", date:"2022-11-30 14:00:39"},
                    {compName:"NICE 홀딩스", account:"jimlee@nice.co.kr", name:"이종민", account2:"jimlee@nice.co.kr", content:"당사권한 -> 그룹IT권한 변경", date:"2022-11-30 14:00:39"},
                    {compName:"NICE 홀딩스", account:"jimlee@nice.co.kr", name:"이종민", account2:"jimlee@nice.co.kr", content:"당사권한 -> 그룹IT권한 변경", date:"2022-11-30 14:00:39"},
                    {compName:"NICE 홀딩스", account:"jimlee@nice.co.kr", name:"이종민", account2:"jimlee@nice.co.kr", content:"당사권한 -> 그룹IT권한 변경", date:"2022-11-30 14:00:39"},
                    {compName:"NICE 홀딩스", account:"jimlee@nice.co.kr", name:"이종민", account2:"jimlee@nice.co.kr", content:"당사권한 -> 그룹IT권한 변경", date:"2022-11-30 14:00:39"},
                    {compName:"NICE 홀딩스", account:"jimlee@nice.co.kr", name:"이종민", account2:"jimlee@nice.co.kr", content:"당사권한 -> 그룹IT권한 변경", date:"2022-11-30 14:00:39"},
                    {compName:"NICE 홀딩스", account:"jimlee@nice.co.kr", name:"이종민", account2:"jimlee@nice.co.kr", content:"당사권한 -> 그룹IT권한 변경", date:"2022-11-30 14:00:39"},
                    {compName:"NICE 홀딩스", account:"jimlee@nice.co.kr", name:"이종민", account2:"jimlee@nice.co.kr", content:"당사권한 -> 그룹IT권한 변경", date:"2022-11-30 14:00:39"},
                    {compName:"NICE 홀딩스", account:"jimlee@nice.co.kr", name:"이종민", account2:"jimlee@nice.co.kr", content:"당사권한 -> 그룹IT권한 변경", date:"2022-11-30 14:00:39"},
                    {compName:"NICE 홀딩스", account:"jimlee@nice.co.kr", name:"이종민", account2:"jimlee@nice.co.kr", content:"당사권한 -> 그룹IT권한 변경", date:"2022-11-30 14:00:39"},
                    {compName:"NICE 홀딩스", account:"jimlee@nice.co.kr", name:"이종민", account2:"jimlee@nice.co.kr", content:"당사권한 -> 그룹IT권한 변경", date:"2022-11-30 14:00:39"},
                    {compName:"NICE 홀딩스", account:"jimlee@nice.co.kr", name:"이종민", account2:"jimlee@nice.co.kr", content:"당사권한 -> 그룹IT권한 변경", date:"2022-11-30 14:00:39"},
                    {compName:"NICE 홀딩스", account:"jimlee@nice.co.kr", name:"이종민", account2:"jimlee@nice.co.kr", content:"당사권한 -> 그룹IT권한 변경", date:"2022-11-30 14:00:39"},
                    {compName:"NICE 홀딩스", account:"jimlee@nice.co.kr", name:"이종민", account2:"jimlee@nice.co.kr", content:"당사권한 -> 그룹IT권한 변경", date:"2022-11-30 14:00:39"},
                    {compName:"NICE 홀딩스", account:"jimlee@nice.co.kr", name:"이종민", account2:"jimlee@nice.co.kr", content:"당사권한 -> 그룹IT권한 변경", date:"2022-11-30 14:00:39"},
                    {compName:"NICE 홀딩스", account:"jimlee@nice.co.kr", name:"이종민", account2:"jimlee@nice.co.kr", content:"당사권한 -> 그룹IT권한 변경", date:"2022-11-30 14:00:39"},
                    {compName:"NICE 홀딩스", account:"jimlee@nice.co.kr", name:"이종민", account2:"jimlee@nice.co.kr", content:"당사권한 -> 그룹IT권한 변경", date:"2022-11-30 14:00:39"},
                    {compName:"NICE 홀딩스", account:"jimlee@nice.co.kr", name:"이종민", account2:"jimlee@nice.co.kr", content:"당사권한 -> 그룹IT권한 변경", date:"2022-11-30 14:00:39"},
                    {compName:"NICE 홀딩스", account:"jimlee@nice.co.kr", name:"이종민", account2:"jimlee@nice.co.kr", content:"당사권한 -> 그룹IT권한 변경", date:"2022-11-30 14:00:39"},
                    {compName:"NICE 홀딩스", account:"jimlee@nice.co.kr", name:"이종민", account2:"jimlee@nice.co.kr", content:"당사권한 -> 그룹IT권한 변경", date:"2022-11-30 14:00:39"},
                    {compName:"NICE 홀딩스", account:"jimlee@nice.co.kr", name:"이종민", account2:"jimlee@nice.co.kr", content:"당사권한 -> 그룹IT권한 변경", date:"2022-11-30 14:00:39"},
                    {compName:"NICE 홀딩스", account:"jimlee@nice.co.kr", name:"이종민", account2:"jimlee@nice.co.kr", content:"당사권한 -> 그룹IT권한 변경", date:"2022-11-30 14:00:39"},
                ],
            }
        },
        props: {
        },
        methods: {
            firstPage () {
                this.pageNum = 0;
            },
            nextPage () {
                this.pageNum += 1;
            },
            prevPage () {
                this.pageNum -= 1;
            },
            lastPage () {
                this.pageNum = this.pageCount -1;
            },
            toPage (page) {
                this.pageNum = page;
            },
        },
        computed: {
            pageCount () {
                let listLeng = this.listArray.length,
                listSize = this.pageSize,
                page = Math.floor(listLeng / listSize);
                if (listLeng % listSize > 0) page += 1;
                return page;
            },
            paginatedData () {
                const start = this.pageNum * this.pageSize,
                        end = start + this.pageSize;
                return this.listArray.slice(start, end);
            },
            pages () {
                const list=[];
                let startpage = parseInt(this.pageNum/3)*3+1;
                let lastPage = parseInt(this.pageNum / 3) * 3 + 3;
                let endpage = lastPage <= this.pageCount ? lastPage : this.pageCount;

                for(let index = startpage; index <= endpage; index+=1) {
                    list.push(index);
                }

                return list
            }
        }
    }
</script>

<style src="../../css/Manage/sub_16.css" scoped />