<template>
    <div class="sub2-container">
        <img class="sub2-section-icon" src="../../images/section-icon.png" alt="섹션아이콘" />
        <div class="sub2-T1">메일 그룹</div>
    </div>
    <div class="sub2-container2">
        <div class="sub2-section-header">
            <img class="dot" src="../../images/dot.png" alt="" />
            <div class="sub2-T3">RPA 업무 리스트</div>
        </div>
        <div class="sub2-T2">※메일그룹이 없는 업무는 엑셀 다운로드 시 제외됩니다.</div>
        <div class="sub2-sub-container">
            <div class="input-container">
                <label for="type" style="display:flex">회사명</label>
                <CustomSelect
                :options="['1', '2', '3', '4']"
                :default="'1'"
                class="select"
                />
                
                <label for="search">검색</label>
                <input id="search" type="text" placeholder="업무명/이메일/업무아이디/담당자/봇이름"/>

                <input type="checkbox" id="addInfo"/>
                <label for="addInfo">종료된 업무 포함:</label>
                <button class="search-btn">검색</button>
            </div>
        </div>
    </div>
    <div class="sub2-container3">
        <table class="sub2-table">
            <colgroup>
                <col width="8%">
                <col width="8.5%">
                <col width="14%">
                <col width="7%">
                <col width="4.5%">
                <col width="4.5%">
                <col width="4.5%">
                <col width="4.5%">
                <col width="6%">
                <col width="10%">
                <col width="9%">
                <col width="3.5%">
                <col width="6%">
                <col width="5%">
            </colgroup>
            <thead>
                <tr>
                    <th rowspan="2">업무아이디</th>
                    <th rowspan="2">회사명</th>
                    <th rowspan="2">업무명</th>
                    <th rowspan="2">업무<br/>절감시간(분)</th>
                    <th colspan="4">구분</th>
                    <th rowspan="2">담당자</th>
                    <th rowspan="2">스케줄</th>
                    <th rowspan="2">봇 이름</th>
                    <th rowspan="2">사용 여부</th>
                    <th rowspan="2" colspan="2">관리</th>
                </tr>
                <tr>
                    <th>요청</th>
                    <th>취합</th>
                    <th>통보</th>
                    <th>N/A</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="list in paginatedData" :key="list.group">
                    <td>{{list.id}}</td>
                    <td>{{list.compName}}</td>
                    <td  @click="$router.push('/rpa/sub11')">{{list.workName}}</td>
                    <td>{{list.time}}</td>
                    <td>{{list.request}}</td>
                    <td>{{list.gather}}</td>
                    <td>{{list.notice}}</td>
                    <td>{{list.na}}</td>
                    <td>{{list.charge}}</td>
                    <td>{{list.schedule}}</td>
                    <td>{{list.botName}}</td>
                    <td>{{list.use}}</td>
                    <td>
                        <button class="edit-btn">수정</button>
                    </td>
                    <td>
                        <button class="delete-btn"/>
                    </td>
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
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
                    {id:"COOT001", compName:"NICE 홀딩스", workName:"임원 접대성 경비 내역 취합", time:180, request: 0, gather: 0, notice: 0, na: 0, charge:"김무성", schedule:"매일 08:30", botName:"2_rpabot03", use: "Y"},
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

<style src="../../css/RPA/sub_10.css" scoped />