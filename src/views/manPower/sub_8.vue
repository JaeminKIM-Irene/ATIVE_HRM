<template>
    <SideBar3 />
    <div class="sub2-container">
        <img class="sub2-section-icon" src="../../images/section-icon.png" alt="섹션아이콘" />
        <div class="sub2-T1">전체 퇴사/직무변경자 현황</div>
    </div>
    <div class="sub2-container2">
        <div class="sub2-section-header">
            <img class="dot" src="../../images/dot.png" alt="" />
            <div class="sub2-T2">ATIVE그룹 퇴사자 현황</div>
        </div>
        <div class="sub2-sub-container">
            <div class="input-container">
                <label for="type" style="display:flex">기간</label>
                <v-date-picker v-model="startDate">
                    <template v-slot="{ inputValue, inputEvents }">
                        <div class="date-picker" v-on="inputEvents" >
                            {{inputValue}}
                            <img class="calendar-icon" src="../../images/calendar.png" alt="달력" />
                        </div>
                    </template>
                </v-date-picker>
                <div class="range">~</div>
                <v-date-picker v-model="endDate">
                    <template v-slot="{ inputValue, inputEvents }">
                        <div class="date-picker" v-on="inputEvents" >
                            {{inputValue}}
                            <img class="calendar-icon" src="../../images/calendar.png" alt="달력" />
                        </div>
                    </template>
                </v-date-picker>
                <input id="search" type="text" placeholder="이름"/>
                <button class="search-btn">검색</button>
            </div>
        </div>
    </div>
    <div class="sub2-container3">
        <div class="sub2-section-header">
            <img class="dot" src="../../images/dot.png" alt="" />
            <div class="sub2-T3">통계</div>
        </div>
        <table class="sub-table">
            <colgroup>
                <col width="13%">
                <col width="8%">
                <col width="8%">
                <col width="8%">
                <col width="8%">
                <col width="8%">
                <col width="8%">
                <col width="8%">
                <col width="8%">
                <col width="14%">
            </colgroup>
            <thead>
                <tr>
                    <th rowspan="2">회사명</th>
                    <th colspan="2">정규직</th>
                    <th colspan="6">비정규직</th>
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
                    <td>*전체</td>
                    <td>13</td>
                    <td>434</td>
                    <td>32</td>
                    <td>39</td>
                    <td>11</td>
                    <td>31</td>
                    <td>47</td>
                    <td>160</td>
                    <td>607</td>
                </tr>
                <tr v-for="list in statArray" :key="list.group"  @click="$router.push('/man/sub9')">
                    <td>{{list.overall}}</td>
                    <td>{{list.member}}</td>
                    <td>{{list.regular}}</td>
                    <td>{{list.contract1}}</td>
                    <td>{{list.contract2}}</td>
                    <td>{{list.contract3}}</td>
                    <td>{{list.dispatch}}</td>
                    <td>{{list.subcontract}}</td>
                    <td>{{list.subtotal}}</td>
                    <td>{{list.total}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="sub2-container4">
        <div class="list-num">[퇴사자 수:169]</div>
        <div class="sub2-section-header">
            <img class="dot" src="../../images/dot.png" alt="" />
            <div class="sub2-T3">TOTAL</div>
        </div>
        <table class="sub2-table">
            <colgroup>
                <col width="16%">
                <col width="12%">
                <col width="8%">
                <col width="8%">
                <col width="12%">
                <col width="29%">
                <col width="15%">
            </colgroup>
            <thead>
                <tr>
                    <th>회사명</th>
                    <th>부서명</th>
                    <th>이름</th>
                    <th>계약형태</th>
                    <th>퇴사/직무변경 날짜</th>
                    <th>퇴사/직무변경 이유</th>
                    <th>입력버튼</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="list in paginatedData" :key="list.group">
                    <td>{{list.compName}}</td>
                    <td>{{list.partName}}</td>
                    <td>{{list.name}}</td>
                    <td>{{list.type}}</td>
                    <td>
                        <v-date-picker v-model="list.date">
                            <template v-slot="{ inputValue, inputEvents }">
                                <div class="date-picker2" v-on="inputEvents" >
                                    {{inputValue}}
                                </div>
                            </template>
                        </v-date-picker>
                    </td>
                    <td><input class="reason" type="text" placeholder="퇴사 사유를 입력해주세요!" :value=list.reason /></td>
                    <td>
                        <button class="edit-btn">사유입력</button>
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
    import SideBar3 from '../../components/SideBar3.vue'

    export default {
        components: {
            'HeaderNav' : HeaderNav,
            'CustomSelect' : CustomSelect,
            SideBar3,
        },
        data () {
            return {
                pageNum: 0,
                pageSize: 10,
                startDate:new Date(),
                endDate:new Date(),
                statArray: [
                    {overall: 'ATIVE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, total: 31},
                    {overall: 'ATIVE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, total: 31},
                    {overall: 'ATIVE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, total: 31},
                    {overall: 'ATIVE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, total: 31},
                    {overall: 'ATIVE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, total: 31},
                    {overall: 'ATIVE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, total: 31},
                    {overall: 'ATIVE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, total: 31},
                    {overall: 'ATIVE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, total: 31},
                    {overall: 'ATIVE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, total: 31},
                    {overall: 'ATIVE 홀딩스', member: 1, regular: 11, contract1: 0, contract2: 0, contract3: 0, dispatch: 1, subcontract: 1, subtotal: 1, total: 31},
                ],
                listArray: [
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    {compName: 'ATIVE 홀딩스', partName: "IS혁신실", name: "백석주", type: "정규직", date: "2022-11-18", reason: "이직", edit:""},
                    
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

<style src="../../css/ManPower/sub_8.css" scoped />