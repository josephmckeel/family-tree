class FamilyTree {
  constructor(first) {
    if (!first || typeof (first) !== 'string') {
      throw new Error('Need name')
    }
    this.value = first,
      this.number = 1,
      this.children = []
  }

  familySize() {
    let count = 1 + this.children.length
    return count
  }

  findMember(name) {
    if (name === this.value) {
      return this
    }
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].value === name) {
        return this.children[i]
      }
    }
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].familySize()
    }

  }

  log() {
    let node = 1
    let final = [`-${this.value}\n`]
    this.children.map(child => {
      let currentStr = `--${child.value}\n`
      final.push(currentStr)
      if (child.children.length !== 0) {
        child.children.map(grand => {
          let currStr = `---${grand.value}\n`
          final.push(currStr)
        })
      }
    })
    return final.join('')
  }

  insert(name) {
    this.size++
    this.children.push(new FamilyTree(name))
  }
}

module.exports = FamilyTree;


