<template>
    <SideBar2 />
    <div class="sub-container">
        <img class="sub-section-icon" src="../../images/section-icon.png" alt="섹션아이콘" />
        <div class="sub-T1">전체 IT 인력현황</div>
    </div>
    <div class="sub-container2">
        <button class="download-btn">엑셀다운로드</button>
        <div class="sub-section-header">
            <img class="dot" src="../../images/dot.png" alt="" />
            <div class="sub-T2">NICE그룹 전체 인력현황</div>
        </div>
        <div class="sub-sub-container">
            <div class="input-container">
                <label style="display:flex">근무형태</label>
                <CustomSelect
                :options="['1', '2', '3', '4']"
                :default="'1'"
                class="select"
                />
                <label for="work" style="display:flex">주직무</label>
                <CustomSelect
                :options="['1', '2', '3', '4']"
                :default="'1'"
                class="select"
                />
                <label for="search">검색</label>
                <input id="search" type="text" placeholder="직책/이름/이메일/내선/휴대폰/업무요약"/>
                <button class="search-btn">검색</button>
            </div>
        </div>
    </div>
    <div class="sub-container3">
        <table class="sub-table">
            <colgroup>
                <col width="15%">
                <col width="7%">
                <col width="7%">
                <col width="7%">
                <col width="7%">
                <col width="7%">
                <col width="7%">
                <col width="7%">
                <col width="7%">
                <col width="10%">
                <col width="10%">
            </colgroup>
            <thead>
                <tr>
                    <th rowspan="2">회사명</th>
                    <th colspan="2">정규직</th>
                    <th colspan="6">비정규직</th>
                    <th rowspan="2" class="main-pink">미분류</th>
                    <th rowspan="2">합계</th>
                </tr>
                <tr>
                    <th>임원</th>
                    <th>정규직</th>
                    <th>계약(일반)</th>
                    <th>계약(전문)</th>
                    <th>계약(무기)</th>
                    <th>파견</th>
                    <th>도급</th>
                    <th>소계</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>전체</td>
                    <td>13</td>
                    <td>434</td>
                    <td>32</td>
                    <td>39</td>
                    <td>11</td>
                    <td>31</td>
                    <td>47</td>
                    <td>160</td>
                    <td>0</td>
                    <td>607</td>
                </tr>
                <tr v-for="list in paginatedData" :key="list.group"  @click="$router.push('/man/sub7')">
                    <td>{{list.overall}}</td>
                    <td>{{list.member}}</td>
                    <td>{{list.regular}}</td>
                    <td>{{list.contract1}}</td>
                    <td>{{list.contract2}}</td>
                    <td>{{list.contract3}}</td>
                    <td>{{list.dispatch}}</td>
                    <td>{{list.subcontract}}</td>
                    <td>{{list.subtotal}}</td>
                    <td>{{list.unclass}}</td>
                    <td>{{list.total}}</td>
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
    import SideBar2 from '../../components/SideBar2.vue'

    export default {
        components: {
            'HeaderNav' : HeaderNav,
            'CustomSelect' : CustomSelect,
            SideBar2,
        },
        data () {
            return {
                pageNum: 0,
                pageSize: 10,
                listArray: [
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
                    {overall: 'NICE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, unclass: 0, total: 31},
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

<style src="../../css/ManPower/sub_6.css" scoped />